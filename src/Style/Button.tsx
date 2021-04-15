import React from "react";
import styled from "styled-components/macro";
import { useSpring, animated, interpolate } from "react-spring";

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

type Props = {
  label: string;
  colour?: string;
};
export function Button({ label, colour }: Props): JSX.Element {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <StyledButton
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      // style={{ transform: props.xys.interpolate(trans)}}
      style={{
        // @ts-ignore
        transform: interpolate(props.xys, (x, y, s) => {
          return `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
        }),
      }}
      colour={colour}
    >
      {label}
    </StyledButton>
  );
}

const StyledButton = styled(animated.button)<{ colour?: string }>`
  text-decoration: none;
  border: none;
  background-color: ${({ theme, colour }) =>
    colour ? colour : theme.colours.orangePeel};
  color: ${({ theme }) => theme.colours.honedew};
  padding: 12px 20px;
  text-transform: capitalize;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    text-decoration: none;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    background-color: ${({ theme, colour }) =>
      colour ? colour : theme.colours.lightOrangePeel};
  }
`;
const Label = styled.label`
  font-weight: 800;
  text-decoration: none;
`;
