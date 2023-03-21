import React, { useMemo, useState } from "react";
import styled from "styled-components";
import StoryCard from "../../Components/GalleryCard/StoryCard";
import { useSelector } from "react-redux";
import breakpoints from "../../Components/Common/breakpoints";
import { Swiper } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

type Props = {};

export function FeturedStory(props: Props): JSX.Element {
  const artwork = useSelector((state: any) => state.artGallery.artwork);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(undefined);
  const randomFeaturedStory = useMemo(
    () =>
      artwork && artwork.length
        ? crypto.getRandomValues(new Uint32Array(1))[0] % (artwork.length - 1)
        : 0,
    [artwork]
  );

  return (
    <StoryContainer data-test="story-container">
      <h2 className="title">Featured Art</h2>
      {artwork && artwork.length && (
        <StoryCard data={artwork[randomFeaturedStory]} />
      )}
    </StoryContainer>
  );
}

export const StoryContainer = styled.div`
  display: block;
  .title {
    color: ${({ theme }) => theme.colours.blueSapphire};
    font-size: 32px;
    line-height: 34px;
    margin-bottom: 15px;
    @media only screen and (min-width: ${breakpoints.size.lg}px) {
      text-align: center;
      font-size: 48px;
      line-height: 50px;
      margin-bottom: 30px;
    }
  }
`;

export default FeturedStory;

export const StoryCarousel = styled(Swiper)`
  margin-top: 50px;
`;
