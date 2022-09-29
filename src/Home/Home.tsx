import React from "react";
import styled from "styled-components/macro";
import { StyledContainer, Header, headerSpringProps } from "../Style/Stuff";
import { Button } from "../Style/Button";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Icon from "../Style/Icon";
import breakpoints from "../Style/Common/breakpoints";

type Props = {};

export function Home(props: Props): JSX.Element {
  const springProps = useSpring(headerSpringProps);

  return (
    <>
      <Header maxWidth="md">
        {/* <Icon icon="home" colour="#61DAFB" /> */}
        <animated.h1 style={springProps}>Home</animated.h1>
      </Header>
      <StyledContainer maxWidth="md">
        <Body data-test="body-home">
          <StyledLink to="/bio" tabIndex={-1}>
            <Button label="Auto-Biography" />
          </StyledLink>
          <StyledLink to="/portfolio" tabIndex={-1}>
            <Button label="Art Portfolio" />
          </StyledLink>
          <StyledLink to="/inspire" tabIndex={-1}>
            <Button label="Inspire Me" />
          </StyledLink>
        </Body>
      </StyledContainer>
    </>
  );
}

export default Home;

const Body = styled.div`
  padding: 40px 15px;
  min-height: 500px;
  background: ${({ theme }) => theme.colours.honeyDew};
  border: 1px solid ${({ theme }) => theme.colours.quickSilver};
  border-radius: 4px;
  margin-top: 12px;

  ${({ theme }) => `${theme.media.tablet} {
    padding: 40px 25px;
    display: grid;
    grid-gap: 20px;
    }
  `}
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  height: 40px;
  margin-bottom: 15px;

  @media only screen and (min-width: ${breakpoints.size.md}px) {
    height: 80px;
  }
`;
