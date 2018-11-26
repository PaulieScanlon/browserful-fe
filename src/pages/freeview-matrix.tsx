import * as React from 'react';
import { fetchCanIuseData2 } from '../utils/fetch';
import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
import { AppBar } from '../components/AppBar';
import { scaffolding, common } from '../theme';

import styled from 'react-emotion';

interface IProps {
  data: any;
  isLoading: boolean;
  hasErrored: boolean;
}

export const FreeviewContent = styled.div({
  label: 'freeview-content',
  marginTop: common.appBarHeight,
  width: '100%',
  minHeight: '100vh',
  position: 'absolute',
  top: '0px',
  right: '0px'
});

class Freeview extends React.Component<IProps> {
  static async getInitialProps() {
    const res = await fetchCanIuseData2();

    return {
      isLoading: res.isLoading,
      data: res.data,
      hasErrored: res.hasErrored
    };
  }

  render() {
    const { agents } = this.props.data;
    console.log(agents);
    return (
      <React.Fragment>
        <HeadTag />
        <AppBar fixed={true} width="100%" />
        <FreeviewContent>
          <Container
            fluid
            style={{
              margin: `${scaffolding.gutterLg} ${scaffolding.gutterSm}`
            }}
          >
            <Row>
              <Col xs={12} sm={12} md={12} lg={6}>
                This is the preivew page. Add some BrowserCards if you like.
                Have a look at app-matrix.tsx in /src/pages. Check the console
                for the data returned.
              </Col>
            </Row>
          </Container>
        </FreeviewContent>
      </React.Fragment>
    );
  }
}

export default Freeview;
