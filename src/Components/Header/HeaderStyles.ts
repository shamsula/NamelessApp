import { Container } from "@material-ui/core";
import styled from "styled-components";
import { IconButton } from "../Button/IconButton";
import breakpoints from "../Common/breakpoints";
import { gradientAnimation, pixelBorder } from "../Misc/Misc";

export const HeaderContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 79px;
  transition: all 0.3s ease-in-out;
  && > div:first-child {
    transition: all 0.3s ease-in-out;
    left: -800px;
  }
  &&.is-open {
    height: 100vh;
    && > div:first-child {
      display: flex;
      height: 100%;
      left: 0;
      justify-content: space-evenly;
      align-content: space-around;
      flex-wrap: nowrap;
      flex-direction: column;
      background: ${({ theme }) => theme.colours.lightBlueSapphireOpacity};
      backdrop-filter: blur(2.3px);
      padding: 20px 50px 0;
      border-bottom: 1px solid ${({ theme }) => theme.colours.quickSilver};
    }
  }

  @media only screen and (min-width: ${breakpoints.size.md}px) {
    height: 110px;
  }

  @media only screen and (min-width: ${breakpoints.size.lg}px) {
    z-index: 100;
    top: 0;
    height: 110px;
    position: fixed;

    && > div:first-child {
      transition: all 0.3s ease-in-out;
      left: 0;
    }
    &&.is-open {
      height: fit-content;

      a {
        transition: all 0.3s ease-in-out;
        min-height: 50px;
        margin-bottom: 12px;
      }
    }
  }
`;

export const NavContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: none;

  & > a {
    text-decoration: none;
  }
  @media only screen and (min-width: ${breakpoints.size.lg}px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 65px;
    width: 100%;
    color: #fff;
    border-bottom: 2px solid
      ${({ theme }) => theme.colours.lightBlueSapphireOpacity};
    transition: background-color 2s ease-in-out;
    background: ${({ theme }) => theme.colours.blueSapphireOpacity};
    backdrop-filter: blur(1.2px);

    &:has(:hover) {
      background-color: linear-gradient(
        90deg,
        ${({ theme }) => theme.colours.blueSapphireOpacity} 0%,
        ${({ theme }) => theme.colours.lightBlueSapphireOpacity} 100%
      );
      animation: ${gradientAnimation} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both infinite;
    }
  }
`;

export const NavItem = styled.li`
  list-style: none;
  padding: 20px 5px;
  margin: 0 15px;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colours.darkGrey};
  transition: all 0.3s ease-in-out;
  border-bottom: none;
  text-align: center;

  @media only screen and (min-width: ${breakpoints.size.lg}px) {
    font-size: 12px;
    padding: 10px 15px;
    min-width: 200px;
    background: ${({ theme }) => theme.colours.orangePeel};
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colours.darkGrey};

    &:hover {
      text-shadow: ${({ theme }) => theme.textShadow[2]};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colours.honeyDew};
    text-shadow: ${({ theme }) => theme.textShadow[1]};

    cursor: pointer;
    transform: scale(1.1);
  }
  @media only screen and (max-width: ${breakpoints.size.lg}px) {
    ${pixelBorder}
  }
`;

export const CurrentPageTitle = styled(Container)<{
  shouldHide: boolean | undefined;
}>`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  text-transform: uppercase;
  letter-spacing: 10px;
  line-height: 36px;
  padding: 24px 4px;
  color: ${({ theme }) => theme.colours.orangePeel};
  text-shadow: ${({ theme }) => theme.textShadow[1]};
  background: ${({ theme }) => theme.colours.honeyDew};
  height: 80px;
  box-shadow: ${({ theme }) => theme.boxShadows[1]};

  position: absolute;
  top: ${({ shouldHide }) => (shouldHide ? "-145px" : 0)};
  z-index: 300;
  transition: all 0.3s ease-in-out;

  h1 {
    font-size: 25px;
    padding-left: 35px;
    text-align: center;
  }

  @media only screen and (min-width: ${breakpoints.size.lg}px) {
    position: relative;
    border-radius: 4px;
    h1 {
      padding-left: 0;
      font-size: 32px;
    }
  }
`;

export const StyledIconButtons = styled(IconButton)`
  position: absolute;
  left: 12px;
  z-index: 400;

  &:hover {
    > div {
      background-color: ${({ theme }) => theme.colours.honeyDew};
    }
  }

  &:focus {
    transform: scale(0.9);
  }

  @media only screen and (min-width: ${breakpoints.size.lg}px) {
    left: 20px;
  }
`;
