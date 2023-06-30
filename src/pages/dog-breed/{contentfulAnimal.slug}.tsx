import React from "react";
import { graphql, Link, type HeadFC } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import { Animal } from "../../types/animal";
import Layout from "../../components/layout";
import Grid from "../../components/ui/grid";
import ContentfulHero from "../../components/contentful/hero";
import Typography from "../../components/ui/typography";
import Rating from "../../components/contentful/rating";

interface PageData {
  contentfulAnimal: Animal;
}

interface PageProps {
  data: PageData;
}

export default function Page(props: PageProps) {
  const page = props?.data?.contentfulAnimal ?? {};

  return (
    <Layout>
      <div style={{ padding: "12px 0" }}>
        <Link to="/">Back to all breeds</Link>
      </div>
      <ContentfulHero title={page?.breed} image={page?.image} theme="dark" />
      <Grid cols={2} gap="24px">
        {page?.story && (
          <div>
            <Typography variant="h4">Breed Story</Typography>
            {renderRichText(page.story)}
          </div>
        )}
        <div>
          <Typography variant="h4">Breed Information</Typography>
          {page?.breedOrigination && (
            <div>
              <Typography variant="h5">Origination</Typography>
              {page.breedOrigination}
            </div>
          )}
          {page?.friendliness && (
            <div>
              <Typography variant="h5">
                Friendliness ({page.friendliness})
              </Typography>
              <Rating rating={page.friendliness} maxRating={5} />
            </div>
          )}
          {page?.shedding && (
            <div>
              <Typography variant="h5">Shedding ({page.shedding})</Typography>
              <Rating rating={page.shedding} maxRating={5} />
            </div>
          )}
          {page?.lifespanLowEnd && page?.lifespanHighEnd && (
            <div>
              <Typography variant="h5">Average Lifespan</Typography>
              {page.lifespanLowEnd} - {page.lifespanHighEnd} years
            </div>
          )}
        </div>
      </Grid>
    </Layout>
  );
}

export const pageQuery = graphql`
  query Page($id: String!) {
    contentfulAnimal(id: { eq: $id }) {
      id
      breed
      breedOrigination
      story {
        raw
      }
      image {
        gatsbyImageData(width: 300, aspectRatio: 1, placeholder: BLURRED)
      }
      friendliness
      shedding
      lifespanLowEnd
      lifespanHighEnd
    }
  }
`;

export const Head: HeadFC = (props) => {
  const animal: PageData = props.data as any;

  return (
    <>
      <title>{animal?.contentfulAnimal?.breed}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
};
