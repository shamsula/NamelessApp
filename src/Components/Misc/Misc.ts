import styled, { keyframes, css } from "styled-components/macro";
import { Container } from "@material-ui/core";
import Omni from "../../img/omnimon.jpg";
import breakpoints from "../Common/breakpoints";

export const StyledContainer = styled(Container)<{ colour?: string }>`
  background: ${({ theme, colour }) =>
    colour ? colour : theme.colours.platinum};
  min-height: 100vh;
  padding: 12px;
  margin-top: 80px;
  @media only screen and (min-width: ${breakpoints.size.md}px) {
    margin-top: 45px;
  }
  @media only screen and (min-width: ${breakpoints.size.lg}px) {
    margin-top: 85px;
  }
`;

export const Body = styled.div`
  padding: 25px;
  min-height: 500px;
  background: ${({ theme }) => theme.colours.honeyDew};
  border: 1px solid ${({ theme }) => theme.colours.quickSilver};
  border-radius: 4px;
  margin-top: 12px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  color: ${({ theme }) => theme.colours.orangePeel};
  margin-bottom: 12px;
  text-shadow: ${({ theme }) => theme.textShadow[0]};
  &:hover {
    background-color: ${({ theme }) => theme.colours.darkGrey};
  }
`;

export const headerSpringProps = {
  to: {
    transform: "translate3d(0,0,0)",
    scale: "1",
    opacity: 1,
  },

  from: {
    transform: "translate3d(1.8%,0,0)",
    scale: "1.05",
    opacity: 0.8,
  },
  config: {
    duration: 1000,
  },
};

// @ts-ignore
export const aberration = keyframes`
0% {
  text-shadow:1px 1px 0px #f0f, -1px -1px 0 #0ff;
}
33% {
  text-shadow:2px 3px 0px #f0f, -3px -2px 0 #0ff;
}
66% {
   text-shadow:-1px -1px 0px #f0f, 1px 1px 0 #0ff;
}
to {
  text-shadow:2px 1px 0px #f0f, -1px -2px 0 #0ff;
}
`;

export const gradientAnimation = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const Top = styled.main`
  position: relative;
  width: 100%;

  ${({ theme }) => `${theme.media.desktop} {
    padding: 1.6rem;
    background: url(${Omni}), #fff;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center;
    }
  `}
`;

// creds to => https://codepen.io/fallwestmike
export const pixelBorder = css<{ bgColour?: string; bgColourInvert?: string }>`
  --pixel-bg: ${({ theme }) => theme.colours.orangePeel};
  /* ↑ Inner background color */

  /* --pixel-bg-2: ${({ theme }) => theme.colours.lightOrangePeel}; */
  /* ↑ Inner background color Inverted */

  --pixel-border: black;
  /* ↑ Inner border color */

  --pixel-border-2: white;
  /* ↑ Middle border color */

  --pixel-border-3: var(--pixel-border);
  /* ↑ Outer border color */

  --pixel: 0.125rem;
  /* ↑ Pixel size */

  &:hover {
    --pixel-bg: ${({ theme }) => theme.colours.powderBlue};
    --pixel-border-2: ${({ theme }) => theme.colours.orangePeel};
  }
  transition: all 0.3s ease-in-out;
  background: var(--pixel-bg);
  box-shadow:
  
		
	/* Inner Background Color */ 0 calc(var(--pixel) * -3) 0
      calc(var(--pixel) * -1) var(--pixel-bg),
    0 calc(var(--pixel) * 3) 0 calc(var(--pixel) * -1) var(--pixel-bg),
    0 calc(var(--pixel) * -6) 0 calc(var(--pixel) * -2) var(--pixel-bg),
    0 calc(var(--pixel) * 6) 0 calc(var(--pixel) * -2) var(--pixel-bg),
    0 calc(var(--pixel) * -9) 0 calc(var(--pixel) * -4) var(--pixel-bg),
    0 calc(var(--pixel) * 9) 0 calc(var(--pixel) * -4) var(--pixel-bg),
    0 calc(var(--pixel) * -12) 0 calc(var(--pixel) * -6) var(--pixel-bg),
    0 calc(var(--pixel) * 12) 0 calc(var(--pixel) * -6) var(--pixel-bg),
    /* Pixel Border Layer 1 */ calc(var(--pixel) * -1) 0 0 0 var(--pixel-border),
    var(--pixel) 0 0 0 var(--pixel-border),
    0 calc(var(--pixel) * -2) 0 0 var(--pixel-border),
    0 calc(var(--pixel) * 2) 0 0 var(--pixel-border),
    0 calc(var(--pixel) * -5) 0 calc(var(--pixel) * -1) var(--pixel-border),
    0 calc(var(--pixel) * 5) 0 calc(var(--pixel) * -1) var(--pixel-border),
    0 calc(var(--pixel) * -7) 0 calc(var(--pixel) * -2) var(--pixel-border),
    0 calc(var(--pixel) * 7) 0 calc(var(--pixel) * -2) var(--pixel-border),
    0 calc(var(--pixel) * -10) 0 calc(var(--pixel) * -4) var(--pixel-border),
    0 calc(var(--pixel) * 10) 0 calc(var(--pixel) * -4) var(--pixel-border),
    0 calc(var(--pixel) * -13) 0 calc(var(--pixel) * -6) var(--pixel-border),
    0 calc(var(--pixel) * 13) 0 calc(var(--pixel) * -6) var(--pixel-border),
    /* Pixel Border Layer 2 */ calc(var(--pixel) * -2) 0 0 0
      var(--pixel-border-2),
    calc(var(--pixel) * 2) 0 0 0 var(--pixel-border-2),
    0 calc(var(--pixel) * -1) 0 var(--pixel) var(--pixel-border-2),
    0 var(--pixel) 0 var(--pixel) var(--pixel-border-2),
    0 calc(var(--pixel) * -4) 0 0 var(--pixel-border-2),
    0 calc(var(--pixel) * 4) 0 0 var(--pixel-border-2),
    0 calc(var(--pixel) * -6) 0 calc(var(--pixel) * -1) var(--pixel-border-2),
    0 calc(var(--pixel) * 6) 0 calc(var(--pixel) * -1) var(--pixel-border-2),
    0 calc(var(--pixel) * -8) 0 calc(var(--pixel) * -2) var(--pixel-border-2),
    0 calc(var(--pixel) * 8) 0 calc(var(--pixel) * -2) var(--pixel-border-2),
    0 calc(var(--pixel) * -11) 0 calc(var(--pixel) * -4) var(--pixel-border-2),
    0 calc(var(--pixel) * 11) 0 calc(var(--pixel) * -4) var(--pixel-border-2),
    0 calc(var(--pixel) * -14) 0 calc(var(--pixel) * -6) var(--pixel-border-2),
    0 calc(var(--pixel) * 14) 0 calc(var(--pixel) * -6) var(--pixel-border-2),
    /* Border Layer 3: --pixel-border-3 */ calc(var(--pixel) * -3) 0 0 0
      var(--pixel-border-3),
    calc(var(--pixel) * 3) 0 0 0 var(--pixel-border-3),
    0 0 0 calc(var(--pixel) * 2) var(--pixel-border-3),
    0 calc(var(--pixel) * -3) 0 var(--pixel) var(--pixel-border-3),
    0 calc(var(--pixel) * 3) 0 var(--pixel) var(--pixel-border-3),
    0 calc(var(--pixel) * -5) 0 0 var(--pixel-border-3),
    0 calc(var(--pixel) * 5) 0 0 var(--pixel-border-3),
    0 calc(var(--pixel) * -7) 0 calc(var(--pixel) * -1) var(--pixel-border-3),
    0 calc(var(--pixel) * 7) 0 calc(var(--pixel) * -1) var(--pixel-border-3),
    0 calc(var(--pixel) * -9) 0 calc(var(--pixel) * -2) var(--pixel-border-3),
    0 calc(var(--pixel) * 9) 0 calc(var(--pixel) * -2) var(--pixel-border-3),
    0 calc(var(--pixel) * -12) 0 calc(var(--pixel) * -4) var(--pixel-border-3),
    0 calc(var(--pixel) * 12) 0 calc(var(--pixel) * -4) var(--pixel-border-3),
    0 calc(var(--pixel) * -15) 0 calc(var(--pixel) * -6) var(--pixel-border-3),
    0 calc(var(--pixel) * 15) 0 calc(var(--pixel) * -6) var(--pixel-border-3);
`;
