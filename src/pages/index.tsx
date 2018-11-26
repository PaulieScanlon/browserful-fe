import * as React from 'react';
import Link from 'next/link';
import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
import { AppBar } from '../components/AppBar';
import { scaffolding } from '../theme';

class Index extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <HeadTag />
        <AppBar />
        <Container fluid style={{ marginTop: `${scaffolding.gutterLg}` }}>
          <Row>
            <Col sm={12}>
              <div style={{ marginBottom: '10px' }}>
                This is the{' '}
                <Link href={{ pathname: '/app/matrix' }}>
                  <a>app/matrix</a>
                </Link>{' '}
                page
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <div style={{ marginBottom: '10px' }}>
                This is the{' '}
                <Link href={{ pathname: '/app/messages' }}>
                  <a>app/messages</a>
                </Link>{' '}
                page
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <div style={{ marginBottom: '10px' }}>
                This is the{' '}
                <Link href="/freeview/matrix">
                  <a>freeview/matrix</a>
                </Link>{' '}
                page
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Index;
