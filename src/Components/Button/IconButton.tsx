// simple react button functional component
import React from "react";
import styled from "styled-components/macro";

type Props = {
  onClick: () => void;
  [key: string]: any;
};

export function IconButton({ onClick, ...props }: Props): JSX.Element {
  return (
    <ButtonContainer onClick={onClick} {...props}>
      {props.children}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button`
  padding: 12px;
  margin: 0;
  transition: box-shadow 0.25s ease-in-out;
  cursor: pointer;
  border: none;
  border-radius: 9px;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows[1]};
    border: 1px solid ${({ theme }) => theme.colours.quickSilver};
    background-color: ${({ theme }) => theme.colours.blueSapphireOpacity};
  }
`;
