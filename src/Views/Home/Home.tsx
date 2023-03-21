import React from "react";
import { StyledContainer } from "../../Components/Misc/Misc";
import { Body } from "./Styled";
import { useSelector } from "react-redux";
import FeaturedStory from "../../Components/FeaturedStory/FeaturedStory";
import DelayedLink from "../../utils/DelayedLink";
import { Button } from "../../Components/Button/Button";
import styled from "styled-components";

type Props = {};

export function Home(props: Props): JSX.Element {
  const artwork = useSelector((state: any) => state.artGallery.artwork);

  console.log("artwrk", artwork);

  return (
    <>
      <StyledContainer maxWidth="lg">
        <Body data-test="body-home">
          <FeaturedStory />
          <LinksContainer>
            <DelayedLink to="/bio" tabIndex={-1}>
              <Button className="bio-btn" label="Auto-Biography" />
            </DelayedLink>
            <DelayedLink to="/portfolio" tabIndex={-1}>
              <Button label="Art Portfolio" />
            </DelayedLink>
            <DelayedLink to="/inspire" tabIndex={-1}>
              <Button label="Inspire Me" />
            </DelayedLink>
          </LinksContainer>
        </Body>
      </StyledContainer>
    </>
  );
}

export default Home;

const LinksContainer = styled.div`
  margin-top: 50px;
`;
