import React from "react";
import "./App.css";
import styled from "styled-components/macro";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Biography from "./Views/Bio/Bio";
import Portfolio from "./Views/Portfolio/Portfolio";
import Home from "./Views/Home/Home";
import { Top } from "./Components/Misc/Misc";
import { Link } from "react-router-dom";
import Spinner from "./Components/Spinner/Spinner";
import { Container } from "@material-ui/core";
import Footer from "./TopStyle/Footer";
import { Inspire } from "./Views/Inspire/Inspire";
import breakpoints from "./Components/Common/breakpoints";
import { Header } from "./Components/Header/Header";

function App() {
  const springProps = useSpring({
    opacity: 1,
    minHeight: "100vh",
    backgroundColor: "#1c1c1c",
    from: {
      opacity: 0,
      minHeight: "20vh",
      backgroundColor: "#fff",
    },
    config: { duration: 1500 },
  });

  return (
    <HomeCont style={springProps}>
      <Top>
        <Header maxWidth="md" />
        <SuperHeader maxWidth="md">
          <Spinner colour="orangePeel" />
        </SuperHeader>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/bio">
            <Biography />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/inspire">
            <Inspire />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer>
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
  background-color: ${({ theme }) => theme.colours.newBlack};
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  border-radius: 4px;
  padding: 0.3rem 1rem;
  &:hover {
    background-color: transparent;
  }
`;
const SuperHeader = styled(Container)`
  && {
    display: flex;
    padding: 2px;
    @media only screen and (max-width: ${breakpoints.size.md}px) {
      display: none;
    }
  }
  justify-content: end;
`;
