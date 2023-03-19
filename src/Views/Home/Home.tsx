import React from "react";
import { StyledContainer } from "../../Components/Misc/Misc";
import { Button } from "../../Components/Button/Button";
import DelayedLink from "../../utils/DelayedLink";
import { Body } from "./Styled";

type Props = {};

export function Home(props: Props): JSX.Element {
  return (
    <>
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
