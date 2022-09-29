import React, { useState } from "react";
import styled from "styled-components/macro";
import {
  StyledContainer,
  Header,
  headerSpringProps,
  Body,
} from "../Style/Stuff";
import { useSpring, animated } from "react-spring";
import { Button } from "@material-ui/core";

import data from "../Data/data.json";
import Back from "../Style/StyledBack";
import Picture from "../Style/Picture";
import Port3D from "./AnimatedPortfolio";

import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper-bundle.min.css";
import { Navigation } from "swiper";

// icon by icon-small: https://www.flaticon.com/authors/icon-small
import CarouselNextBtn from "./next-button.svg";

export function Portfolio(): JSX.Element {
  const headerProps = useSpring(headerSpringProps);
  const [isViewing3D, setIsViewing3d] = useState<boolean>(false);

  const renderImgs = () =>
    data.images.map((img) => (
      <StyledSwiperSlide key={`${img.url}`}>
        <Picture url={img.url} hasMargin={true} />
      </StyledSwiperSlide>
    ));

  const onClick = () => {
    setIsViewing3d(!isViewing3D);
  };

  const paginationOptions: any = {
    clickable: true, // buggy likely due to spring animation of Picture
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
            <Button onClick={onClick} data-test="toggle-button">
              <H3>View {isViewing3D ? "Static" : "Animated"} Content</H3>
            </Button>
          </ButtonContainer>
          {isViewing3D ? (
            <Port3D />
          ) : (
            <ImagesContainer data-test="image-container">
              <StyledSwiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                loop={true}
                pagination={paginationOptions}
              >
                {renderImgs()}
              </StyledSwiper>
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
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 400px;

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

const StyledSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
`;
