import React from "react";
import { getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Card from "../card";
import Grid from "../ui/grid";
import { Animal } from "../../types/animal";

interface ContentfulListingProps {
  items: Animal[];
}

export default function ContentfulListing(props: ContentfulListingProps) {
  if (!props?.items || props?.items?.length === 0) return <></>;

  return (
    <Grid cols={3} gap="32px">
      {props?.items?.map((animal) => {
        return (
          <Link to={`/dog-breed/${animal.slug}`}>
            <Card
              title={animal.breed}
              subtitle={animal?.description?.description}
              image={getImage(animal.image)}
              rounded
            />
          </Link>
        );
      })}
    </Grid>
  );
}
