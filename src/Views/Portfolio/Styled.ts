import styled from "styled-components/macro";
import { Swiper, SwiperSlide } from "swiper/react";
import { Switch } from "@material-ui/core";

export const ImagesContainer = styled.div`
  display: grid;
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.colours.orangePeel};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  flex-direction: column;
  gap: 25px;

  h3 {
    margin: auto;
  }
`;

export const StyledSwiper = styled(Swiper)<{ showthumbs?: string }>`
  width: 100%;
  height: ${({ showthumbs }) => (showthumbs ? " 100px" : "600px")};
  ${({ showthumbs }) => (showthumbs ? "" : "padding: 100px 0;")};
  margin-bottom: 40px;

  .swiper-button-next {
    transform: rotate(-90deg);
    :hover {
      transform: rotate(-90deg) scale(1.2);
    }
  }

  .swiper-button-prev {
    transform: rotate(90deg);
    :hover {
      transform: rotate(90deg) scale(1.2);
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    mask-image: none;
    mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3c!--! Font Awesome Pro 6.3.0 by %40fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons%2c Inc. --%3e%3cpath d='M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'/%3e%3c/svg%3e");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.colours.orangePeel};
    width: 24px;
    height: 28px;

    ::after {
      display: none;
    }
  }

  .swiper-button-prev {
    transform: scale(-1, -1);
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)<{ showthumbs: string }>`
  text-align: center;
  font-size: 18px;
  background: ${({ showthumbs }) =>
    showthumbs === "true" ? "transparent" : "#fff "};

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    filter: ${({ showthumbs }) =>
      showthumbs === "true" ? "saturate(0.3)" : "saturate(1)"};
    transition: filter 0.25s ease-in, border 0.25s ease-in-out;
    cursor: pointer;
  }

  &.swiper-slide-thumb-active {
    > div {
      border: 2px solid #ff0;
      filter: saturate(1);
    }
  }

  &:hover > div {
    filter: saturate(1);
  }
`;

export const StyledSwitch = styled(Switch)<{}>`
  .MuiSwitch-colorSecondary.Mui-checked,
  .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
    color: ${({ theme }) => theme.colours.orangePeel};
  }

  .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
    background-color: ${({ theme }) => theme.colours.orangePeel};
  }
`;
