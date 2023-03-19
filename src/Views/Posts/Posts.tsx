//create new tsx component for posts
import React, { useState, useMemo, useEffect } from "react";
import styled from "styled-components/macro";
import Spinner from "../../Components/Spinner/Spinner";
import { Pagination } from "@mui/material";
import Card from "../../Components/GalleryCard/GalleryCard";
import { Body, StyledContainer } from "../../Components/Misc/Misc";
import { useSelector, useDispatch } from "react-redux";

export default function Posts(): JSX.Element {
  const artwork = useSelector((state: any) => state.artGallery.artwork);
  const [data, setData] = useState<ImageDataItems>(artwork);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState<number>(3);

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
    () => (artwork ? artwork?.slice(indexOfFirstCard, indexOfLastCard) : []),
    [artwork, indexOfFirstCard, indexOfLastCard]
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
            {artwork && artwork.length ? (
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
