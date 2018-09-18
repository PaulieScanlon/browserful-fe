import * as React from 'react';
import Link from 'next/link';

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
              <Link href="/app">
                <a>/app</a>
              </Link>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Index;
