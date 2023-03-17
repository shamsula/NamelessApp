//create new tsx component for posts
import React, { useState, useMemo, useEffect } from "react";
import styled from "styled-components/macro";
import Spinner from "../../Components/Spinner/Spinner";
import { Pagination } from "@mui/material";
import Card from "../../Components/GalleryCard/GalleryCard";
import { Body, StyledContainer } from "../../Components/Misc/Misc";

export default function Posts(): JSX.Element {
  const [data, setData] = useState<ImageDataItems>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState<number>(3);

  // rest stuff
  // fetch data for portfolio
  const query = `
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
}
`;

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_DELIVERY_API}`,
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        console.log(data.portfolioCollection.items);
        setData(data.portfolioCollection.items);
      });
  }, []);

  const maxPages = useMemo(
    () => (data ? Math.ceil(data.length / cardsPerPage) : 1),
    [data, cardsPerPage]
  );

  // pagination index stuff
  const indexOfLastCard = useMemo(
    () => currentPage * cardsPerPage,
    [currentPage, cardsPerPage]
  );
  const indexOfFirstCard = useMemo(
    () => indexOfLastCard - cardsPerPage,
    [indexOfLastCard, cardsPerPage]
  );

  const currentCards = useMemo(
    () => (data ? data?.slice(indexOfFirstCard, indexOfLastCard) : []),
    // [data.images, indexOfFirstCard, indexOfLastCard]
    [data, indexOfFirstCard, indexOfLastCard]
  );

  const handleChange = (event: any, value: any) => {
    setCurrentPage(value);
  };

  if (!data) {
    return <Spinner />;
  }

  return (
    <StyledContainer maxWidth="md">
      <Body>
        <Gallery data-test="grid-gallery">
          <CardsContainer>
            {data && data.length ? (
              currentCards.map((data: ImageData) => <Card data={data} />)
            ) : (
              <h1>No posts yet</h1>
            )}
          </CardsContainer>

          <StyledPagination
            page={currentPage}
            onChange={handleChange}
            count={maxPages}
          />
        </Gallery>
      </Body>
    </StyledContainer>
  );
}

const CardsContainer = styled.div`
  display: block;
  gap: 20px;

  > * {
    margin: auto;
    margin-bottom: 20px;
  }

  ${({ theme }) => `${theme.media.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: unset;
    grid-gap: 20px;
    >* {
      margin: unset;
      margin-bottom: unset;
    }
  }`}

  ${({ theme }) => `${theme.media.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
  }`}
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledPagination = styled(Pagination)`
  margin: auto;
  margin-top: 15px;

  ul li button {
    color: ${({ theme }) => theme.colours.orangePeel};
    font-weight: 600;

    &.Mui-selected,
    &.Mui-selected:hover {
      background-color: ${({ theme }) => theme.colours.orangePeel};
      color: #fff;
    }
  }
`;

export interface ImageData {
  title: string;
  media: {
    url: string;
    fileName: string;
    width: number;
    height: number;
  };
  description: string;
  externalUrl: string;
}

export interface ImageDataItems extends Array<ImageData> {}
