import React from "react";
import { graphql, type HeadFC } from "gatsby";

import Layout from "../components/layout";
import Content from "../components/content";

interface PageData {
  contentfulPage: {
    title?: string;
    slug: string;
    contents?: {
      __typename: string;
    }[];
  };
}

interface PageProps {
  data: PageData;
}

export default function Page(props: PageProps) {
  const page = props?.data?.contentfulPage ?? {};

  return (
    <Layout>
      <h1>{page?.title}</h1>
      {page?.contents?.map((component) => (
        <Content {...component} />
      ))}
    </Layout>
  );
}

export const pageQuery = graphql`
  query Page($id: String!) {
    contentfulPage(id: { eq: $id }) {
      id
      title
      contents {
        __typename
        ... on ContentfulHero {
          title
        }
        ... on ContentfulListing {
          items {
            breed
            breedOrigination
            friendliness
            lifespanLowEnd
            lifespanHighEnd
            image {
              file {
                url
              }
            }
            shedding
            slug
            story {
              raw
            }
            description {
              description
            }
            image {
              gatsbyImageData(width: 300, aspectRatio: 1, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = (props) => {
  const data: PageData = props?.data as any;

  return (
    <>
      <title>{data?.contentfulPage?.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
};
