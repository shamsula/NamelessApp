import React from "react";
import styled from "styled-components/macro";
import { StyledContainer, headerSpringProps } from "../Components/Misc/Misc";
import { Button } from "../Components/Button/Button";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Icon from "../Components/Icon/Icon";
import breakpoints from "../Components/Common/breakpoints";
import DelayedLink from "../utils/DelayedLink";
import { Header } from "../Components/Header/Header";

type Props = {};

export function Home(props: Props): JSX.Element {
  const springProps = useSpring(headerSpringProps);

  return (
    <>
      {/* remove the prop dep*/}
      {/* reinsate spinner */}
      <Header maxWidth="md">
        {/* <Icon icon="home" colour="#61DAFB" /> */}
      </Header>
      <StyledContainer maxWidth="md">
        <Body data-test="body-home">
          <DelayedLink to="/bio" tabIndex={-1}>
            <Button label="Auto-Biography" />
          </DelayedLink>
          <DelayedLink to="/portfolio" tabIndex={-1}>
            <Button label="Art Portfolio" />
          </DelayedLink>
          <DelayedLink to="/inspire" tabIndex={-1}>
            <Button label="Inspire Me" />
          </DelayedLink>
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

const StyledLink = styled(DelayedLink)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  height: 40px;
  margin-bottom: 15px;

  @media only screen and (min-width: ${breakpoints.size.md}px) {
    height: 80px;
    font-size: 24px;
    transition: transform 0.25s ease-in-out;

    &:active {
      transform: scale(10);
    }
  }
`;
