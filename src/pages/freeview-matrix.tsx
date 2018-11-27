import * as React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateBrowserlist } from '../modules/browserlist/actions/update_browserlist';

import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
import { AppBar } from '../components/AppBar';
import { scaffolding, common } from '../theme';

import styled from 'react-emotion';

interface IProps {
  updateBrowserlist: any;
}

export const FreeviewContent = styled.div({
  label: 'freeview-content',
  marginTop: common.appBar.height,
  width: '100%',
  minHeight: '100vh',
  position: 'absolute',
  top: '0px',
  right: '0px'
});

class Freeview extends React.Component<IProps> {
  render() {
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
              <Col xs={12} sm={12} md={12} lg={12}>
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

const mapStateToProps = state => ({
  result: state.browserlist.result
});

const mapDispatchToProps = dispatch => ({
  updateBrowserlist: bindActionCreators(updateBrowserlist, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Freeview);
