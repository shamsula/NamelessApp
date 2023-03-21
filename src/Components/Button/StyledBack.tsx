import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { IconChevron } from "../Misc/MiscIcons";

type Props = {};
export function StyledBack(props: Props): JSX.Element {
  return (
    <LinkContainer>
      <StyledLink to="/" data-test="styled-back">
        <IconChevron direction="left" /> <span className="back-text">Back</span>
      </StyledLink>
    </LinkContainer>
  );
}

export default StyledBack;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colours.orangePeel};
  margin-bottom: 12px;
  text-shadow: ${({ theme }) => theme.textShadow[0]};
  width: fit-content;
  text-align: center;
  padding: 4px 8px 4px 8px;
  margin: 0 0 12px;
  border: 1px solid ${({ theme }) => theme.colours.orangePeel};
  border-radius: 4px;
  background-color: white;
  transition: all 0.65s ease-in-out;
  display: inline-flex;

  && .back-text {
    display: none;
    position: relative;
    width: 0;
  }

  &&:hover,
  &&:focus,
  &&:active {
    .back-text {
      display: block;
      width: fit-content;
    }
  }

  // back chevron
  &:hover div {
    background-color: white;
  }

  // back chevron
  > div {
    width: 22px;
    height: 26px;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows[1]};
    border: 1px solid ${({ theme }) => theme.colours.quickSilver};
    background-color: ${({ theme }) => theme.colours.blueSapphireOpacity};
    color: white;
  }
`;
