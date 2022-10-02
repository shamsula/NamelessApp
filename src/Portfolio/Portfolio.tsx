import React, { useState } from "react";
import styled from "styled-components/macro";
import {
  StyledContainer,
  Header,
  headerSpringProps,
  Body,
} from "../Style/Stuff";
import { useSpring, animated } from "react-spring";
import { Button, Switch } from "@material-ui/core";

import data from "../Data/data.json";
import Back from "../Style/StyledBack";
import Picture from "../Style/Picture";
import Port3D from "./AnimatedPortfolio";

import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper-bundle.min.css";
import { FreeMode, Navigation, Thumbs } from "swiper";

// icon by icon-small: https://www.flaticon.com/authors/icon-small
import CarouselNextBtn from "./next-button.svg";
import { useWindowSize } from "@react-hook/window-size";
import breakpoint from "../Style/Common/breakpoints";

export function Portfolio(): JSX.Element {
  const headerProps = useSpring(headerSpringProps);
  const [isViewing3D, setIsViewing3d] = useState<boolean>(false);
  const [isViewingThumbnails, setIsViewingThumbnails] =
    useState<boolean>(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(undefined);
  const [width, height] = useWindowSize();

  // Disable animation for mobile views
  const isAnimationEnabled: boolean = width >= breakpoint.size.md;

  const renderImgs = (isThumbs?: boolean) =>
    data.images.map((img) => (
      <StyledSwiperSlide
        showthumbs={isThumbs === true ? "true" : " "}
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

  return (
    <>
      <Header maxWidth="md">
        <animated.h1 style={headerProps}>Art Portfolio</animated.h1>
      </Header>

      <StyledContainer maxWidth="md">
        <Body>
          <Back />
          <ButtonContainer>
            <Button onClick={on3DToggle} data-test="toggle-button">
              <H3>View {isViewing3D ? "Static" : "Animated"} Content</H3>
            </Button>
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
          </ButtonContainer>
          {isViewing3D ? (
            <Port3D />
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
              {isAnimationEnabled && isViewingThumbnails && (
                <StyledSwiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={0}
                  slidesPerView={3}
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

  .swiper-button-next,
  .swiper-button-prev {
    width: calc(var(--swiper-navigation-size) / 29 * 27);
    background-image: url(${CarouselNextBtn});
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    transition: filter 1s;
    &:hover {
      filter: drop-shadow(-3px 0 4px #ff0);
    }
  }

  .swiper-button-prev {
    transform: scale(-1, -1);
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)<{ showthumbs: string }>`
  text-align: center;
  font-size: 18px;
  background: ${({ showthumbs }) => (showthumbs ? "transparent" : "#fff ")};

  display: flex;
  justify-content: center;
  align-items: center;
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
