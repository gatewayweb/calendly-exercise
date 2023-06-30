import React, { PropsWithChildren } from "react";
import { styled } from "styled-components";

interface GridProps {
  cols?: number;
  gap?: string;
}

const StyledGrid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(1, 1fr)`};
  gap: ${(props) => props?.gap ?? "0px"};

  @media (min-width: 1024px) {
    grid-template-columns: ${(props) => `repeat(${props?.cols ?? 1}, 1fr)`};
  }
`;

export default function Grid(props: PropsWithChildren<GridProps>) {
  return <StyledGrid {...props}>{props?.children}</StyledGrid>;
}
