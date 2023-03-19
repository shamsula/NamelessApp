import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  artwork: [],
  artists: [],
  isLoading: false,
  error: null,
} as any;

const galleryQuery = `
{
  portfolioCollection {
    items {
      title
      description
      media {
        url
        fileName
        width
        height
      }
      externalUrl
    }
  }
  authorCollection {
    items {
      fname
      lname
      isAdmin
      bio {
        json
      }
      photo {
        url
        fileName
        width
        height
      }
    }
  }
}
`;

// just fetching artwork at this time
export const fetchArtwork = createAsyncThunk(
  "artGallery/fetchArtwork",
  async () => {
    // response ts type
    const response: any = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_DELIVERY_API}`,
        },
        body: JSON.stringify({ query: galleryQuery }),
      }
    )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        return {
          artwork: data.portfolioCollection.items,
          artists: data.authorCollection.items,
        };
      });
    return response;
  }
);

// fetch artist data
const artGallerySlice = createSlice({
  name: "artGallery",
  initialState,
  reducers: {
    // updateArtwork: (state, action) => {
    //   state.artwork = action.payload;
    // },
  },
  /* eslint-disable */
  extraReducers: (builder) => {
    builder.addCase(fetchArtwork.fulfilled, (state, action) => {
      state.artwork = action.payload.artwork;
      state.artists = action.payload.artists;
      state.isLoading = false;
      state.error = null;
    }),
      builder.addCase(fetchArtwork.rejected, (state, action) => {
        state.isLoading = false;
        state.error = null;
      }),
      builder.addCase(fetchArtwork.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const selectArtwork = (state: any) => state.artGallery.artwork;
export const selectArtists = (state: any) => state.artGallery.artists;

export default artGallerySlice.reducer;

// interface GalleryState {
//   artwork: [];
//   artists: [];
//   isLoading: boolean;
//   error: string | null;
// }
