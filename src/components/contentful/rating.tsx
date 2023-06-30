import React from "react";
import { css, styled } from "styled-components";

import Flex from "../ui/flex";

interface RatingProps {
  rating: number;
  maxRating: number;
}

const RatingIndicator = styled.span<{ fill?: boolean }>`
  width: 32px;
  height: 32px;
  border: 1px solid #ccc;

  ${(props) =>
    props?.fill &&
    css`
      background-color: green;
      border-color: green;
    `}
`;

export default function Rating(props: RatingProps) {
  if (!props?.maxRating) props.maxRating = 5;

  const arr = new Array(props.maxRating).fill(0);

  return (
    <Flex gap="8px">
      {arr?.map((number: number, index: number) => {
        return <RatingIndicator fill={index < props.rating} />;
      })}
    </Flex>
  );
}
