import React, { PropsWithChildren } from "react";
import { css, styled } from "styled-components";

interface FlexProps {
  direction?: "column" | "row";
  justify?: "center" | "start" | "end" | "between";
  gap?: string;
  wrap?: boolean;
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props?.direction ?? "row"};
  justify-content: ${(props) => props?.justify ?? "start"};
  gap: ${(props) => props?.gap ?? "0px"};

  ${(props) =>
    props?.wrap &&
    css`
      flex-wrap: wrap;
    `}
`;

export default function Flex(props: PropsWithChildren<FlexProps>) {
  return <StyledFlex {...props}>{props?.children}</StyledFlex>;
}
