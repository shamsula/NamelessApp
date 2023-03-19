import React, { useState, useMemo, useCallback } from "react";
import styled from "styled-components/macro";
import { Header } from "../../Components/Header/Header";
import {
  Top,
  StyledContainer,
  headerSpringProps,
  Body,
} from "../../Components/Misc/Misc";
import { useSpring, animated } from "react-spring";
import Texture from "../../img/paper.png";
import Back from "../../Components/Button/StyledBack";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useSelector } from "react-redux";
import Spinner from "../../Components/Spinner/Spinner";

type Props = {
  isFlipped?: boolean;
};
export function Bio(props: Props): JSX.Element {
  const author = useSelector(
    (state: any) =>
      state.artGallery.artists.filter((artist: any) => artist.isAdmin)[0]
  );

  const [flipped, set] = useState<boolean>(props.isFlipped ?? false);
  const [canClick, setCanClick] = useState<boolean>(true);
  const { transform } = useSpring({
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 900, friction: 100 },
  });

  const headerProps = useSpring(headerSpringProps);

  const rotateContainer = useCallback(() => {
    if (!flipped && canClick) {
      return transform;
    } else {
      return transform.interpolate((t) => `${t} rotateX(180deg)`);
    }
  }, [flipped, canClick, transform]);

  const Text = (): JSX.Element => {
    if (canClick) {
      return (
        <>
          <SubHeadingCont data-test={!flipped ? "flip-side" : "front-side"}>
            <H4>{!flipped ? "Intro" : "Flip Side"}</H4>
          </SubHeadingCont>
          <p className={`${flipped && "invisible"}`}>
            {documentToReactComponents(author.bio.json)}
          </p>
          {!flipped ? (
            <p style={{ textAlign: "right" }} className="cursive signature">
              - {author.fname} {author.lname}
            </p>
          ) : (
            <p className="cursive">Fin.</p>
          )}
        </>
      );
    } else {
      return (
        <>
          <SubHeadingCont data-test="">
            <H4></H4>
          </SubHeadingCont>
        </>
      );
    }
  };

  const handleOnClick = () => {
    setCanClick(false);
    setTimeout(() => {
      set((state) => !state);
    }, 50);
    setCanClick(true);
  };

  return (
    <>
      <StyledContainer maxWidth="md">
        <Body onClick={handleOnClick} role="clickable">
          <Back />
          <FlipContainer>
            <TextContainer
              style={{ transform: rotateContainer() }}
              flipped={flipped ? 1 : 0}
              img={author ? author.photo.url : ""}
              data-test="bio-text"
            >
              {author ? Text() : <Spinner />}
            </TextContainer>
          </FlipContainer>
        </Body>
      </StyledContainer>
    </>
  );
}

export default Bio;

const FlipContainer = styled.div`
  position: relative;
  cursor: pointer;
`;
const TextContainer = styled(animated.div)<{ flipped: number; img: string }>`
  && h2 {
    margin: 0;
  }

  &&,
  && p {
    color: ${({ flipped }) => (flipped === 1 ? "black" : `#fff`)};
    font-family: ${({ theme }) => theme.fontFamilies.heading};
    letter-spacing: 1px;
  }

  && .cursive {
    font-family: ${({ theme }) => theme.fontFamilies.cursive} !important;
  }

  && .signature {
    margin-top: 20px;
  }

  .invisible * {
    color: transparent !important;
  }
  padding: 24px;
  background: ${({ theme, flipped, img }) =>
    flipped === 1
      ? `url(${img}), black`
      : `url(${Texture}), ${theme.colours.orangePeel}`};
  background-size: ${({ flipped }) => (flipped === 1 ? "cover" : "auto")};
  background-repeat: ${({ flipped }) =>
    flipped === 1 ? "no-repeat" : "repeat"};
  background-position: center;
  height: fit-content;
  box-shadow: ${({ theme }) => theme.boxShadows[0]};
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows[1]};
  }
`;

const SubHeadingCont = styled.div`
  margin: 0 0 20px 0;
  padding: 0;
`;

const H4 = styled.h2`
  && {
    color: ${({ theme }) => theme.colours.honeydew};
  }
`;

interface Artist {
  fname: string;
  lname: string;
  bio: Document;
}
