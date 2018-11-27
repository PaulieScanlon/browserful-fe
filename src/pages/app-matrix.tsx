import * as React from 'react';

import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
import { AppBar } from '../components/AppBar';
import { SideBar } from '../components/SideBar';

import { scaffolding } from '../theme';

interface IProps {}

class Matrix extends React.Component<IProps> {
  render() {
    const desktopBrowsers = <div>Desktop Browsers</div>;

    const mobileBrowsers = <div>Mobile Browsers</div>;

    return (
      <React.Fragment>
        <HeadTag />
        <AppBar showLogo={false} fixed={true} width="100%" />
        <SideBar active={true}>
          <Container
            fluid
            style={{
              margin: `${scaffolding.gutterLg} ${scaffolding.gutterSm}`
            }}
          >
            <Row>
              <Col xs={12} sm={12} md={12} lg={6}>
                {desktopBrowsers}
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                {mobileBrowsers}
              </Col>
            </Row>
          </Container>
        </SideBar>
      </React.Fragment>
    );
  }
}

export default Matrix;
