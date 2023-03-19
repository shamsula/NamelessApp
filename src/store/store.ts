import {
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import inspireReducer from "./spring";
import artGalleryReducer from "./artGallery";

export const store = configureStore({
  reducer: {
    inspire: inspireReducer,
    artGallery: artGalleryReducer,
  },
});

// export type RootState = ReturnType<typeof any>;
export type RootState = ReturnType<any>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
