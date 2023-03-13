import styled, { css } from "styled-components/macro";

export const IconHamburger = styled.div`
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3c!--! Font Awesome Pro 6.3.0 by %40fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons%2c Inc. --%3e%3cpath d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z'/%3e%3c/svg%3e");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colours.orangePeel};
  width: 24px;
  height: 28px;
`;

export const IconChevron = styled.div<{ direction: Direction }>`
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3c!--! Font Awesome Pro 6.3.0 by %40fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons%2c Inc. --%3e%3cpath d='M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'/%3e%3c/svg%3e");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colours.orangePeel};
  width: 24px;
  height: 28px;

  // default is down
  ${({ direction }) =>
    direction === "left" &&
    css`
      transform: rotate(90deg);
    `}
  ${({ direction }) =>
    direction === "up" &&
    css`
      transform: rotate(180deg);
    `}
    ${({ direction }) =>
    direction === "right" &&
    css`
      transform: rotate(-90deg);
    `}
`;

type Direction = "left" | "right" | "up" | "down";
