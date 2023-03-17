import React, { useState } from "react";
import styled from "styled-components/macro";
import { Header } from "../../Components/Header/Header";
import {
  StyledContainer,
  headerSpringProps,
  Body,
} from "../../Components/Misc/Misc";
import { useSpring, animated } from "react-spring";
import { Button, Switch } from "@material-ui/core";

import data from "../../Data/data.json";
import Back from "../../Components/Button/StyledBack";
import Picture from "../../Components/Picture/Picture";
import Port3D from "./AnimatedPortfolio";
import LegacyPortfolio from "./LegacyPortfolio";

import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper-bundle.min.css";
import { FreeMode, Navigation, Thumbs } from "swiper";

// icon by icon-small: https://www.flaticon.com/authors/icon-small
import CarouselNextBtn from "./next-button.svg";
import { useWindowSize } from "@react-hook/window-size";
import breakpoint from "../../Components/Common/breakpoints";

import { shuffleArray } from "../../utils/utils";
import { ImageData } from "./LegacyPortfolio";

export function Portfolio(): JSX.Element {
  const headerProps = useSpring(headerSpringProps);
  const [isViewing3D, setIsViewing3d] = useState<boolean>(false);
  const [isSlider, setIsSlider] = useState<boolean>(false);
  const [isViewingThumbnails, setIsViewingThumbnails] =
    useState<boolean>(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(undefined);
  const [width, height] = useWindowSize();

  // Disable animation for mobile views
  const isAnimationEnabled: boolean = width >= breakpoint.size.md;

  const shuffledData = shuffleArray(data.images);

  const renderImgs = (isThumbs?: boolean) =>
    shuffledData.map((img: ImageData) => (
      <StyledSwiperSlide
        showthumbs={isThumbs === true ? "true" : ""}
        key={`${img.url}`}
      >
        <Picture
          url={img.url}
          hasMargin={true}
          isAnimationEnabled={!isThumbs && isAnimationEnabled}
          isThumbs={isThumbs}
        />
      </StyledSwiperSlide>
    ));

  const on3DToggle = () => {
    setIsViewing3d(!isViewing3D);
  };

  const onLegacyToggle = () => {
    setIsViewingThumbnails(!isViewingThumbnails);
  };

  const onSliderToggle = () => {
    setIsSlider(!isSlider);
  };

  return (
    <>
      <StyledContainer maxWidth="md">
        <Body>
          <Back />
          <ButtonContainer>
            <Button onClick={on3DToggle} data-test="toggle-button">
              <H3>View {isViewing3D ? "Static" : "Animated"} Content</H3>
            </Button>
            {!isViewing3D && (
              <Button onClick={onSliderToggle} data-test="toggle-button-1">
                <H3>View as {isSlider ? "Slider" : "Cards"}</H3>
              </Button>
            )}
          </ButtonContainer>
          {isViewing3D ? (
            <Port3D />
          ) : isSlider ? (
            <LegacyPortfolio />
          ) : (
            <ImagesContainer data-test="image-container">
              <StyledSwiper
                loop={true}
                spaceBetween={10}
                navigation={isAnimationEnabled ? true : false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                direction={isAnimationEnabled ? "horizontal" : "vertical"}
                pagination={{
                  clickable: true,
                }}
              >
                {renderImgs()}
              </StyledSwiper>
              {isAnimationEnabled && (
                <H3>
                  Thumbnails
                  <StyledSwitch
                    checked={isViewingThumbnails}
                    onChange={onLegacyToggle}
                    style={{
                      color: "success.main",
                    }}
                  />
                </H3>
              )}
              {isAnimationEnabled && isViewingThumbnails && (
                <StyledSwiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={5}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                  showthumbs="true"
                  simulateTouch={true}
                >
                  {renderImgs(true)}
                </StyledSwiper>
              )}
            </ImagesContainer>
          )}
        </Body>
      </StyledContainer>
    </>
  );
}

export default Portfolio;

const ImagesContainer = styled.div`
  display: grid;
`;

const H3 = styled.h3`
  color: ${({ theme }) => theme.colours.orangePeel};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  flex-direction: column;
  gap: 25px;

  h3 {
    margin: auto;
  }
`;

const StyledSwiper = styled(Swiper)<{ showthumbs?: string }>`
  width: 100%;
  height: ${({ showthumbs }) => (showthumbs ? " 100px" : "400px")};
  margin-bottom: 40px;

  .swiper-button-next {
    transform: rotate(-90deg);
    :hover {
      transform: rotate(-90deg) scale(1.2);
    }
  }

  .swiper-button-prev {
    transform: rotate(90deg);
    :hover {
      transform: rotate(90deg) scale(1.2);
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    mask-image: none;
    mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3c!--! Font Awesome Pro 6.3.0 by %40fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons%2c Inc. --%3e%3cpath d='M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'/%3e%3c/svg%3e");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.colours.orangePeel};
    width: 24px;
    height: 28px;

    ::after {
      display: none;
    }
  }

  .swiper-button-prev {
    transform: scale(-1, -1);
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)<{ showthumbs: string }>`
  text-align: center;
  font-size: 18px;
  background: ${({ showthumbs }) =>
    showthumbs === "true" ? "transparent" : "#fff "};

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    filter: ${({ showthumbs }) =>
      showthumbs === "true" ? "saturate(0.3)" : "saturate(1)"};
    transition: filter 0.25s ease-in, border 0.25s ease-in-out;
    cursor: pointer;
  }

  &.swiper-slide-thumb-active {
    > div {
      border: 2px solid #ff0;
      filter: saturate(1);
    }
  }

  &:hover > div {
    filter: saturate(1);
  }
`;

const StyledSwitch = styled(Switch)<{}>`
  .MuiSwitch-colorSecondary.Mui-checked,
  .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
    color: ${({ theme }) => theme.colours.orangePeel};
  }

  .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
    background-color: ${({ theme }) => theme.colours.orangePeel};
  }
`;
