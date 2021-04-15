import React, { useMemo, useState } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components/macro";
import Picture from "../Style/Picture";
import {
  Body,
  Header,
  headerSpringProps,
  StyledContainer,
} from "../Style/Stuff";
import Back from "../Style/StyledBack";
import thumbsUp from "../img/katya-austin-4Vg6ez9jaec-unsplash.jpg";
import { Button } from "@material-ui/core";

const blankQuote = {
  id: "",
  title: "",
  author: "Katya Austin", // credits for the thumbsUp pic
  media: thumbsUp,
  url: "",
  cat: "",
};
export function Inspire(): JSX.Element {
  const [quote, setQoute] = useState<Quote>(blankQuote);
  const headerProps = useSpring(headerSpringProps);

  const getQuote = async () => {
    await fetch(
      "https://healthruwords.p.rapidapi.com/v1/quotes/?t=Mindfulness&maxR=1&size=large",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_QUOTE_KEY!,
          "x-rapidapi-host": "healthruwords.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((quote) => {
        setQoute(quote[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const qouteBtn = () => {
    getQuote();
  };

  const renderQoute = useMemo(() => {
    return <Picture url={quote.media} key={quote.url} hasMargin={false} />;
  }, [quote]);

  return (
    <>
      <Header maxWidth="md">
        <animated.h1 style={headerProps}>Get Inspired</animated.h1>
      </Header>

      <StyledContainer maxWidth="md">
        <Body>
          <Back />
          <QuoteContainer>
            {process.env.REACT_APP_QUOTE_KEY && (
              <Button onClick={qouteBtn}>
                <H3>get your daily quote</H3>
              </Button>
            )}
            {renderQoute}
          </QuoteContainer>
        </Body>
      </StyledContainer>
    </>
  );
}

Inspire.displayName = "Inspire";

interface Quote {
  //   id: string;
  title: string;
  author: string;
  url: string;
  media: string;
  cat: string;
}

const QuoteContainer = styled.div`
  margin: 20px 0;
  display: grid;
  grid-gap: 25px;
`;

const H3 = styled.h3`
  color: ${({ theme }) => theme.colours.orangePeel};
`;
