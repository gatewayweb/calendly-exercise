import React from "react";

import ContentfulListing from "./contentful/listing";

interface ContentProps {
  __typename: string;
}

const contentMap: { [key: string]: any } = {
  ContentfulListing,
};

export default function Content(props: ContentProps) {
  if (!props || !props?.__typename || !contentMap?.[props.__typename])
    return <></>;

  const Component = contentMap[props.__typename];

  return <Component {...props} />;
}
