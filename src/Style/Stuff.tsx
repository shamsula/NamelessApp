import styled, { keyframes } from 'styled-components/macro';
import { Container } from '@material-ui/core'
import { animated } from 'react-spring'

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
`

export const Top = styled.main`
  position: relative;
  padding: 1.6rem;
  width: 100%;
`
export const StyledContainer = styled(Container) <{ colour?: string }>`
  background: ${({ theme, colour }) => colour ? colour : theme.colours.honedew};
  min-height: 100vh;
  padding: 12px;
`

export const Header = styled(Container)`
    && {
      display: flex;
    align-items: center;
    justify-content: center;
    }
    text-transform: uppercase;
    padding: 24px 4px;
    color: ${({ theme }) => theme.colours.honeyDew};
    text-shadow: ${({ theme }) => theme.textShadow[1]};
    // background: ${({ theme }) => theme.colours.persianGreen};
    background: ${({ theme }) => theme.linearGradient}; 
    border-bottom: solid 2px ${({ theme }) => theme.colours.platinum};

`

export const headerSpringProps = {
  to: {
      transform: 'translate3d(0,0,0)',
      scale: '1',
      opacity: 1,
  },

  from: {
      transform: 'translate3d(1.8%,0,0)',
      scale: '1.05',
      opacity: 0.8,
  },
  config: {
      duration: 1000,
  },
}

