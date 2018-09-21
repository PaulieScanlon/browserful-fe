import * as React from 'react';

import routes from 'routes';
const { Link } = routes;

import { fetchRepos } from '../utils/fetch';
import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
import { AppBar } from '../components/AppBar';
import { SideBar } from '../components/SideBar';
import { spaceLg } from '../theme';
import { P } from '../typography';
interface IProps {
  data: any;
}

class Matrix extends React.Component<IProps> {
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
        <AppBar showLogo={false} fixed={true} />
        <SideBar active={true}>
          {/* @TODO is there a better way to wrap the containers so they always have the correct margin top */}
          <Container style={{ marginTop: `${spaceLg}px` }}>
            <Row>
              <Col xs={12} sm={6}>
                <P>left content</P>
              </Col>
              <Col xs={12} sm={6}>
                <P>right content</P>
                <P> name : {name}</P>
                <P>stargazers_count: {stargazers_count}</P>
              </Col>
            </Row>
          </Container>
        </SideBar>
      </React.Fragment>
    );
  }
}

export default Matrix;
