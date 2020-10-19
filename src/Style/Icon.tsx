import React from 'react';
import styled from 'styled-components/macro';
import MaterialIcon from '@material-ui/core/Icon';

type Props = {
  colour?: string
  icon: string;
};
export function Icon ({colour, icon}: Props): JSX.Element {
  return (
    <Container>
    <StyledIcon >{icon}</StyledIcon>
    </Container>

  );
};

export default Icon 

const StyledIcon = styled(MaterialIcon)<{colour?:string}>`
color: ${({ theme,colour }) => colour ? colour : theme.colours.desertSand};
// font-size: 2rem !important;

// height: 1em;
`
const Container = styled.div`
display: flex;
`

Icon.displayName= 'Icon';