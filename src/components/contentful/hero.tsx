import React from "react";
import { css, styled } from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import Grid from "../ui/grid";
import Typography from "../ui/typography";

interface ContentfulHeroProps {
  title?: string;
  image?: any;
  theme?: "dark" | "light";
}

const StyledHero = styled(Grid)<ContentfulHeroProps>`
  align-items: center;
  padding: 4rem;

  ${(props) =>
    props?.theme === "dark" &&
    css`
      background-color: #222;
      h1 {
        color: #fff;
      }
    `}
`;

export default function ContentfulHero(props: ContentfulHeroProps) {
  const heroImage = getImage(props?.image);

  return (
    <StyledHero cols={2} gap="32px" {...props}>
      {props?.title && <Typography variant="h1">{props.title}</Typography>}

      {heroImage && (
        <GatsbyImage image={heroImage} alt={props?.title ?? "Hero Image"} />
      )}
    </StyledHero>
  );
}
