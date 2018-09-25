import * as React from 'react';

import { HeadTag } from '../components/HeadTag';
import { RouteTag } from '../components/RouteTag';
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
              <div style={{ marginBottom: '10px' }}>
                This is the main matrix page =>
                <RouteTag route="app/matrix" params={{ id: 1 }}>
                  /app/matrix
                </RouteTag>
              </div>
              <div>
                This is just a temporary page with some WIP Redux stuff =>
                <RouteTag route="app/messages">/app/messages</RouteTag>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Index;
