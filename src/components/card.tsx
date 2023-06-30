import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { styled, css } from "styled-components";

import Flex from "./ui/flex";
import Typography from "./ui/typography";

interface CardProps {
  title?: string;
  subtitle?: string;
  image?: any;
  rounded?: boolean;
}

const StyledCard = styled(Flex)<CardProps>`
  text-align: center;

  ${(props) =>
    props?.rounded &&
    css`
      img {
        border-radius: 12px;
      }
    `}
`;

export default function Card(props: CardProps) {
  return (
    <StyledCard direction="column" {...props}>
      {props?.image && <GatsbyImage image={props.image} alt="Card image" />}
      {props?.title && (
        <Typography variant="h3" color="secondary">
          {props.title}
        </Typography>
      )}
      {props?.subtitle && <Typography>{props.subtitle}</Typography>}
    </StyledCard>
  );
}
