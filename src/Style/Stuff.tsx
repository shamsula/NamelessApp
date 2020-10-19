import styled from 'styled-components/macro';
import { Container } from '@material-ui/core'
import {  animated } from 'react-spring'


export const Top = styled.main`
  position: relative;
  padding: 1.6rem;
  width: 100%;
`
export const StyledContainer = styled(Container)<{colour?:string}>`
  background: ${({ theme,colour }) => colour ? colour : theme.colours.honedew};
  min-height: 100vh;
  padding: 12px;
`

export const Header = styled(animated.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 0;
    color: ${({ theme }) => theme.colours.desertSand};
    text-shadow: ${({ theme }) => theme.textShadow[0]};
`

export const Footer = styled(Container)`
  && {
    display: flex;
  }
    justify-content: end;
    padding: 12px;
    text-align: right;
    h5{
        color: white;
    }

`