import React, { useState } from "react";
import {
  StyledContainer,
  headerSpringProps,
  Body,
} from "../../Components/Misc/Misc";
import { useSpring } from "react-spring";
import { Button } from "@material-ui/core";

// import data from "../../Data/data.json";
import Back from "../../Components/Button/StyledBack";
import Picture from "../../Components/Picture/Picture";
import Port3D from "./AnimatedPortfolio";
import LegacyPortfolio from "./LegacyPortfolio";

import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper-bundle.min.css";
import { FreeMode, Navigation, Thumbs } from "swiper";
import {
  ImagesContainer,
  H3,
  ButtonContainer,
  StyledSwiper,
  StyledSwiperSlide,
  StyledSwitch,
} from "./Styled";

import { useWindowSize } from "@react-hook/window-size";
import breakpoint from "../../Components/Common/breakpoints";

import { useSelector } from "react-redux";

export function Portfolio(): JSX.Element {
  const artwork = useSelector((state: any) => state.artGallery.artwork);

  const headerProps = useSpring(headerSpringProps);
  const [isViewing3D, setIsViewing3d] = useState<boolean>(false);
  const [isSlider, setIsSlider] = useState<boolean>(false);
  const [isViewingThumbnails, setIsViewingThumbnails] =
    useState<boolean>(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(undefined);
  const [width, height] = useWindowSize();

  // Disable animation for mobile views
  const isAnimationEnabled: boolean = width >= breakpoint.size.md;

  const renderImgs = (isThumbs?: boolean) =>
    artwork.map((img: ImageData) => (
      <StyledSwiperSlide
        showthumbs={isThumbs === true ? "true" : ""}
        key={`${img.media.url}`}
      >
        <Picture
          url={img.media.url}
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
