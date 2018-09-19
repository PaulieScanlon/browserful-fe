import * as React from 'react';

import { Link } from '../../routes';

import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';

class Index extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <HeadTag />
        <Container fluid style={{ padding: 0 }}>
          <Row>
            <Col sm={1}>
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
