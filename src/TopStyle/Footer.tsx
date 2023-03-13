import React from "react";
import { Container } from "@material-ui/core";
import styled from "styled-components/macro";

type Props = {
  children: JSX.Element;
};
function Footer(props: Props): JSX.Element {
  return (
    <StyledFooter maxWidth="md">
      {React.Children.map(props.children, (child) => (
        <AberrationContainer>{child}</AberrationContainer>
      ))}
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled(Container)`
  background-color: ${({ theme }) => theme.colours.newBlack};
  && {
    display: flex;
    padding: 12px;
  }
  justify-content: end;
  text-align: right;
  h5 {
    color: white;
    margin: 0;
    text-transform: uppercase;
  }
`;

const AberrationContainer = styled.div`
  &:hover {
    animation: ${({ theme }) => theme.animation};
  }
`;
