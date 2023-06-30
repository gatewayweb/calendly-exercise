import React, { PropsWithChildren } from "react";
import { styled } from "styled-components";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "span";
  color?: "primary" | "secondary";
}

const StyledTypography = styled.span<TypographyProps>`
  color: ${(props) => (props?.color === "secondary" ? "#02198b" : "#333")};
`;

export default function Typography(props: PropsWithChildren<TypographyProps>) {
  return (
    <StyledTypography as={props?.variant ?? "span"} {...props}>
      {props?.children}
    </StyledTypography>
  );
}
