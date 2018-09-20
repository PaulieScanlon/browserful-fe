import * as React from 'react';

import routes from 'routes';
const { Link } = routes;

import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
import { AppBar } from '../components/AppBar';
import { spaceLg } from '../theme';

class Index extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <HeadTag />
        <AppBar />
        <Container fluid style={{ marginTop: `${spaceLg}px` }}>
          <Row>
            <Col sm={12}>
              <Link route="matrix" params={{ id: 1 }}>
                <a>/app/matrix </a>
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
