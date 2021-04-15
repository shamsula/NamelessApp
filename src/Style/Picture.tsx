import React from "react";
import styled from "styled-components/macro";
import { useSpring, animated, interpolate } from "react-spring";

type Props = {
  // name?: string;
  url: string;
  hasMargin: boolean;
};
const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 150,
  (x - window.innerWidth / 2) / 150,
  1.1,
];

export function Picture({ url, hasMargin = true }: Props): JSX.Element {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <PictureCanvas
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      url={url}
      margin={hasMargin ? "10rem" : "0"}
      style={{
        // @ts-ignore
        transform: interpolate(props.xys, (x, y, s) => {
          return `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
        }),
      }}
    />
  );
}

export default Picture;

const PictureCanvas = styled(animated.div)<{ url: string; margin: string }>`
  //   margin: 1.2rem 2rem;
  margin: ${({ margin }) => `${margin}`};
  background: ${({ url }) => `url(${url}), black`};
  background-size: auto 100%;
  // background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 500px;

  &:hover {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
`;
