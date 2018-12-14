import * as React from 'react';
import Head from 'next/head';

export const HeadTag: React.SFC = () => {
  return (
    <Head>
      <title>Browserful</title>

      <meta
        key="og:title"
        property="og:title"
        content="Last 5 versions, > 0.1%, not dead. This is confusing. Browserful isn’t!"
      />
      <meta
        key="og:image"
        property="og:image"
        content="/static/images/opengraph.jpg"
      />
      <meta
        key="og:description"
        property="og:description"
        content="Using our easy to use sliders you can configure a matrix to show exactly which browsers you support and which browsers you don’t."
      />
    </Head>
  );
};
