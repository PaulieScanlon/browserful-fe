import * as React from 'react';

import routes from 'routes';
const { Link } = routes;

import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
import { AppBar } from '../components/AppBar';

class Index extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <HeadTag />
        <AppBar />
        <Container fluid style={{ padding: 0 }}>
          <Row>
            <Col sm={1}>
              <Link route="matrix" params={{ id: 1 }}>
                <button>/app/matrix </button>
              </Link>
              <div />
              <Link route="messages">
                <a>/app/messages </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Index;
