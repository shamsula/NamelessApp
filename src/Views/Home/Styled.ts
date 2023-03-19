import styled from "styled-components/macro";
import DelayedLink from "../../utils/DelayedLink";
import breakpoints from "../../Components/Common/breakpoints";

export const Body = styled.div`
  padding: 40px 15px;
  min-height: 500px;
  background: ${({ theme }) => theme.colours.honeyDew};
  border: 1px solid ${({ theme }) => theme.colours.quickSilver};
  border-radius: 4px;
  margin-top: 12px;
  @media only screen and (min-width: ${breakpoints.size.lg}px) {
    margin-top: 35px;
  }

  ${({ theme }) => `${theme.media.tablet} {
    padding: 40px 25px;
    display: grid;
    grid-gap: 20px;
    }
  `}
`;

export const StyledLink = styled(DelayedLink)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  height: 40px;
  margin-bottom: 15px;

  @media only screen and (min-width: ${breakpoints.size.md}px) {
    height: 80px;
    font-size: 24px;
    transition: transform 0.25s ease-in-out;

    &:active {
      transform: scale(10);
    }
  }
`;
