import React, { useEffect, useMemo, useState } from "react";
import { useSpring, animated } from "react-spring";
import { headerSpringProps } from "../../Components/Misc/Misc";
import { Link, useLocation } from "react-router-dom";
import { IconChevron, IconHamburger } from "../Misc/MiscIcons";
import {
  HeaderContainer,
  NavContainer,
  NavItem,
  CurrentPageTitle,
  StyledIconButtons,
} from "./HeaderStyles";
import { useWindowSize } from "@react-hook/window-size";
import breakpoint from "../Common/breakpoints";
import styled from "styled-components";

export function Header(props: any): JSX.Element {
  const springProps = useSpring(headerSpringProps);
  const [scroll, setScroll] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [width, setWidth] = useWindowSize();

  const isShowingDesktopIcons: boolean = width >= breakpoint.size.md;

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  // load dynamic from store in future
  const navitemlist = [
    "Auto-Biography",
    "Art Portfolio",
    "Inspire Me",
    // "Posts",
  ];
  const navItemRoutes = [
    "/bio",
    "/portfolio",
    "/inspire",
    // "/posts"
  ];
  const location = useLocation();

  const navitemobjects = useMemo(
    () =>
      navitemlist.map((item, index) => ({
        item,
        route: navItemRoutes[index],
      })),
    [navitemlist, navItemRoutes]
  );

  const currentPageTitle = useMemo(() => {
    const currentRoute = location.pathname;
    const currentPage = navitemobjects.find(
      (item) => item.route === currentRoute
    );
    return currentPage ? currentPage.item : "Home";
  }, [location.pathname, navitemobjects]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setScroll(true);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  const isScrollBeyondTresh = useMemo(() => {
    return scrollPosition > 65 && width > 768 && !isNavOpen;
  }, [scrollPosition]);

  return (
    <HeaderContainer className={isNavOpen ? "is-open" : ""}>
      <NavContainer>
        {navitemobjects.map(({ item, route }) => (
          <Link to={route} key={item} onClick={() => setIsNavOpen(false)}>
            <NavItem>{item}</NavItem>
          </Link>
        ))}
      </NavContainer>
      <CurrentPageTitle
        data-test="header-page"
        shouldHide={isScrollBeyondTresh}
      >
        <StyledIconButtons onClick={toggleNav}>
          {isShowingDesktopIcons ? (
            isNavOpen ? (
              <IconChevron direction="up" />
            ) : (
              <IconChevron direction="down" />
            )
          ) : (
            <IconHamburger />
          )}
        </StyledIconButtons>
        <H1 style={springProps}>{currentPageTitle}</H1>
        {props.children}
      </CurrentPageTitle>
    </HeaderContainer>
  );
}

const H1 = styled(animated.h1)`
  color: ${({ theme }) => theme.colours.blueSapphire};
`;
