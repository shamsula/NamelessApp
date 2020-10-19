import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Top, StyledContainer, Header } from '../Style/Stuff';
import { useSpring, animated, interpolate } from 'react-spring'
import Dashwund from '../img/dashwund.jpg'
import Texture from '../img/paper.png'
import Back from '../Style/StyledBack'


type Props = {

};
export function Bio(props: Props): JSX.Element {
  const [flipped, set] = useState(false)
  const [canClick, setCanClick] = useState<boolean>(true)
  const { transform,
    //  opacity
  } = useSpring({
    // opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 900, friction: 100 }
  })



  const rotateContainer = () => {
    if (!flipped && canClick) {
      return transform
    } else {
      return transform.interpolate(t => `${t} rotateX(180deg)`)
    }
  }

  const Text = (): JSX.Element => {
    if (!flipped && canClick) {
      return (
        <>
          <SubHeadingCont>
            <H4>Intro</H4>
          </SubHeadingCont>
          <p>
            Welcome, this is where I tell my story. It's short and uninspiring, so no need to get all worked up just yet. I'm a Software Developer and I'm currently pursuing life as a video game.
            Gathering resources and useful hobbies along the path. Are you perhaps interested, in learing more?
        </p>
        </>
      )
    } else {
      return (
        <>
          <SubHeadingCont>
            <H4>Flip Side</H4>
          </SubHeadingCont>
          <p>
            End of Line, Pal.
          </p>
        </>
      )
    }
  }

  const handleOnClick = () => {
    setCanClick(false)
    setTimeout(() => {
      set(state => !state)
    },
      50)
    setCanClick(true)
  }

  return (
    <>
      <StyledContainer maxWidth="md">
        <Header>
          <h1>Biography</h1>
        </Header>
        <Body onClick={handleOnClick}>
          <Back />
          <FlipContainer>

            <TextContainer
              style={{ transform: rotateContainer() }}
              isFlipped={flipped}
            // style={{ opacity: interpolate(opacity,(o=> 1-o)), transform }}
            >

              {Text()}
            </TextContainer>
            {/* <TextContainer
              style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}
            >
              Your Mum
          </TextContainer> */}
          </FlipContainer>
        </Body>
      </StyledContainer>
    </>
  );
};

export default Bio

const Body = styled.div`
margin-top: 40px;
padding: 40px 15%;
font-size: 1.6rem;
`
const FlipContainer = styled.div`
 position: relative;
`
const TextContainer = styled(animated.div)<{isFlipped: boolean}>`
color: ${({ isFlipped }) => isFlipped ? '#fff' :`inherit`  };
 padding: 24px;
// background-color: black;
background: ${({ theme, isFlipped }) => isFlipped ? `url(${Dashwund}), black` : `url(${Texture}), ${theme.colours.desertSand}`  };
background-size: ${({isFlipped})=> isFlipped ?  'auto 100%' : 'auto'};
background-repeat: ${({isFlipped})=> isFlipped ?  'no-repeat' : 'repeat'};
background-position: center;
// position: absolute;
min-height: 200px;
box-shadow: ${({theme})=> theme.boxShadows[1]};
`

const SubHeadingCont = styled.div`
  margin: 0 5px 20px 5px;
`

const H4 = styled.h4`
  color: ${({ theme }) => theme.colours.honeydew};
`


