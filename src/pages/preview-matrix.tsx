import * as React from 'react';

import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
import { AppBar } from '../components/AppBar';
import { spaceLg, spaceMd, common } from '../theme';

import styled from 'react-emotion';

export const PreviewContent = styled.div({
  label: 'side-bar-content',
  marginTop: common.appBarHeight,
  width: '100%',
  minHeight: '100vh',
  position: 'absolute',
  top: '0px',
  right: '0px'
});

class Preview extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <HeadTag />
        <AppBar fixed={true} />
        <PreviewContent>
          <Container fluid style={{ margin: `${spaceLg}px ${spaceMd}px` }}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={6}>
                This is the preivew page. Add some BrowserCards if you like.
                Have a look at app-matrix.tsx in /src/pages
              </Col>
            </Row>
          </Container>
        </PreviewContent>
      </React.Fragment>
    );
  }
}

export default Preview;
