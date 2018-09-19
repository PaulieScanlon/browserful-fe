import * as React from 'react';

import routes from 'routes';
const { Link } = routes;

import { fetchRepos } from '../utils/fetch';
import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
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
        <Container fluid style={{ padding: 0 }}>
          <Row>
            <Col sm={1}>
              <Link route="/">
                <a>/index</a>
              </Link>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={4}>
              name : {name} stargazers_count: {stargazers_count}
            </Col>
            <Col sm={4}>One of three columns</Col>
            <Col sm={4}>One of three columns</Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Matrix;
