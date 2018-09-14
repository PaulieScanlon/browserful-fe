import * as React from 'react';
import Link from 'next/link';

import { fetchRepos } from '../utils/fetch';
import { HeadTag } from '../components/HeadTag';

interface IProps {
  data: any;
}

class App extends React.Component<IProps> {
  static async getInitialProps() {
    const res = await fetchRepos();

    return {
      isLoading: res.isLoading,
      data: res.data,
      hasErrored: res.hasErrored
    };
  }

  render() {
    const { name, stargazers_count } = this.props.data;

    return (
      <React.Fragment>
        <HeadTag />
        App.{' '}
        <Link href="/">
          <a>./</a>
        </Link>
        <div>
          name: {name} stargazers_count: {stargazers_count}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
