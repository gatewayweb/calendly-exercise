import React, { PropsWithChildren } from "react";
import { styled } from "styled-components";

import "../globals.css";

const StyledLayout = styled.div`
  min-height: 100vh;
  width: 1280px;
  max-width: 100%;
  font-family: sans-serif;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 40px;
`;

const StyledHeader = styled.header`
  background-color: #dedede;
  padding: 16px;
`;

const StyledFooter = styled.footer`
  background-color: #dedede;
  padding: 16px;
  margin-top: 4rem;
  text-align: center;
  font-size: 0.8rem;
`;

export default function Layout(props: PropsWithChildren) {
  return (
    <StyledLayout>
      <StyledHeader>Calendly Exercise</StyledHeader>
      <main>{props?.children}</main>
      <StyledFooter>Copyright &copy; 2023 CalendlyDogBreeds.com</StyledFooter>
    </StyledLayout>
  );
}
