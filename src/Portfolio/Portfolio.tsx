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

export function Portfolio(): JSX.Element {
  const headerProps = useSpring(headerSpringProps);
  const [isViewing3D, setIsViewing3d] = useState<boolean>(false);

  const renderImgs = () =>
    data.images.map((img) => (
      <Picture url={img.url} key={`${img.url}`} hasMargin={true} />
    ));

  const onClick = () => {
    setIsViewing3d(!isViewing3D);
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
              {renderImgs()}
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
