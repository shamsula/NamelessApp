import React from "react";
import styled from "styled-components/macro";
import {
  StyledContainer,
  Header,
  headerSpringProps,
  Body,
} from "../Style/Stuff";
import { useSpring, animated } from "react-spring";
import data from "../Data/data.json";
import Back from "../Style/StyledBack";
import Picture from "../Style/Picture";

type Props = {};
export function Portfolio({}: Props): JSX.Element {
  const headerProps = useSpring(headerSpringProps);

  const renderImgs = () =>
    data.images.map((img) => (
      <Picture url={img.url} key={`${img.url}`} hasMargin={true} />
    ));
  return (
    <>
      <Header maxWidth="md">
        <animated.h1 style={headerProps}>Portfolio</animated.h1>
      </Header>

      <StyledContainer maxWidth="md">
        <Body>
          <Back />
          <ImagesContainer>{renderImgs()}</ImagesContainer>
        </Body>
      </StyledContainer>
    </>
  );
}

export default Portfolio;

const ImagesContainer = styled.div`
  display: grid;
`;
