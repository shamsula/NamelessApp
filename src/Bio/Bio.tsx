import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Top, StyledContainer, Header, headerSpringProps } from '../Style/Stuff';
import { useSpring, animated, interpolate } from 'react-spring'
import Dashwund from '../img/dashwund.jpg'
import Texture from '../img/paper.png'
import Back from '../Style/StyledBack'


type Props = {

};
export function Bio(props: Props): JSX.Element {
  const [flipped, set] = useState<boolean>(false)
  const [canClick, setCanClick] = useState<boolean>(true)
  const { transform,
    //  opacity
  } = useSpring({
    // opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 900, friction: 100 }
  })

  const headerProps = useSpring(headerSpringProps)



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
    <Header maxWidth="md">
          <animated.h1 style={headerProps}>Biography</animated.h1>
        </Header>
      <StyledContainer maxWidth="md">
        
        <Body onClick={handleOnClick}>
          <Back />
          <FlipContainer>

            <TextContainer
              style={{ transform: rotateContainer() }}
              flipped={flipped ? 1 : 0}
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
// margin-top: 40px;
// padding: 40px 15%;
// font-size: 1.6rem;
padding: 25px;
    min-height: 75vh;
    background: ${({ theme }) => theme.colours.honeyDew};
    border: 1px solid ${({ theme }) => theme.colours.quickSilver};
    border-radius: 4px;
    margin-top: 12px;
`
const FlipContainer = styled.div`
 position: relative;
`
const TextContainer = styled(animated.div)<{flipped: number}>`
color: ${({ flipped }) => flipped === 1 ? '#fff' :`#fff`  };
 padding: 24px;
// background-color: black;
background: ${({ theme, flipped }) => flipped === 1 ? `url(${Dashwund}), black` : `url(${Texture}), ${theme.colours.orangePeel}`  };
background-size: ${({flipped})=> flipped === 1 ?  'auto 100%' : 'auto'};
background-repeat: ${({flipped})=> flipped === 1 ?  'no-repeat' : 'repeat'};
background-position: center;
// position: absolute;
min-height: 200px;
box-shadow: ${({theme})=> theme.boxShadows[1]};
`

const SubHeadingCont = styled.div`
  margin: 0 5px 20px 5px;
`

const H4 = styled.h4`
  && {
  color: ${({ theme }) => theme.colours.honeydew};
  }
  margin: 0 2rem 0 0.5em;
`


