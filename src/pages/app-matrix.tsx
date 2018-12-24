import * as React from 'react';

import { HeadTag } from '../ui/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
import { AppBar } from '../ui/AppBar';
import { SideBar } from '../ui/SideBar';

import { scaffolding } from '../theme';

interface IProps {}

class Matrix extends React.Component<IProps> {
  render() {
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
                Nothing to see here
              </Col>
            </Row>
          </Container>
        </SideBar>
      </React.Fragment>
    );
  }
}

export default Matrix;
