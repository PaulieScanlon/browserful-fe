import * as React from 'react';
import Link from 'next/link';

import { HeadTag } from '../components/HeadTag';

class Index extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <HeadTag />
        Hello World.{' '}
        <Link href="/app">
          <a>App</a>
        </Link>
      </React.Fragment>
    );
  }
}

export default Index;
