import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';

interface IProps {
  store: any;
}

export default withRedux(initStore)(
  class MyApp extends App<IProps> {
    static async getInitialProps({ Component, ctx, store }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {},
        store: store
      };
    }

    render() {
      const { Component, pageProps } = this.props;
      const store = this.props.store;

      return (
        <Container>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      );
    }
  }
);
