import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components/macro';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'
import Biography from './Bio/Bio'
import Home from './Home/Home'
import { Top, Footer } from './Style/Stuff';
import { Link } from 'react-router-dom'
import Spinner from './Style/Spinner';
import { Container } from '@material-ui/core'

function App() {

  const springProps = useSpring({
    opacity: 1,
    minHeight: '100vh',
    backgroundColor: 'black',
    from: {
      opacity: 0,
      minHeight: '20vh',
      backgroundColor: 'white',
    },
    config: { duration: 1500 }
  })

  return (

    <HomeCont style={springProps}>
      <Top>
        <SuperHeader maxWidth="md">
          <Spinner colour="honedew"/>
        </SuperHeader>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/bio">
            <Biography />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer
          maxWidth="md"
        >
          <StyledLink to="/about">
            <h5>About</h5>
          </StyledLink>
        </Footer>
      </Top>
    </HomeCont>
  );
}

export default App;

const HomeCont = styled(animated.div)`
  display: flex;
  // min-height: 100vh;
  background-color: black;
`

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
`
const SuperHeader = styled(Container)`
  && {
    display: flex;
    padding: 2px;
  }
  justify-content: end;
`