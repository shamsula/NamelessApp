import React, { useMemo } from "react";
import styled from "styled-components/macro";
import Picture from "../../Components/Picture/Picture";
import { Body, StyledContainer } from "../../Components/Misc/Misc";
import Back from "../../Components/Button/StyledBack";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { fetchQuote } from "../../store/spring";
import { useWindowSize, useWindowWidth } from "@react-hook/window-size";
import breakpoint from "../../Components/Common/breakpoints";

export function Inspire(): JSX.Element {
  const dispatch = useDispatch();

  const quote = useSelector((state: RootState) => state.inspire.quote);
  const width = useWindowWidth();
  const isAnimationEnabled: boolean = width >= breakpoint.size.md;

  const qouteBtn = () => {
    dispatch(fetchQuote());
  };

  const renderQoute = useMemo(() => {
    return (
      <Picture
        url={quote.media}
        key={quote.url}
        hasMargin={false}
        isAnimationEnabled={isAnimationEnabled}
      />
    );
  }, [quote, isAnimationEnabled]);

  return (
    <>
      <StyledContainer maxWidth="md">
        <Body>
          <Back />
          <QuoteContainer>
            <H2>{quote.title}</H2>
            {renderQoute}
            {process.env.REACT_APP_QUOTE_KEY && (
              <Button onClick={qouteBtn}>
                <H3>get your daily quote</H3>
              </Button>
            )}
          </QuoteContainer>
        </Body>
      </StyledContainer>
    </>
  );
}

Inspire.displayName = "Inspire";

const QuoteContainer = styled.div`
  margin: 20px 0;
  display: grid;
  grid-gap: 25px;
`;

const H3 = styled.h3`
  color: ${({ theme }) => theme.colours.orangePeel};
`;

const H2 = styled.h2`
  color: ${({ theme }) => theme.colours.lightBlueSapphire};

  ${({ theme }) => `${theme.media.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    }
  `}
`;
