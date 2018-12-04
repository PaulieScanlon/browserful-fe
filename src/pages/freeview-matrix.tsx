import * as React from 'react';

// import browserslist from 'browserslist';
import styled from 'react-emotion';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateBrowserlist } from '../modules/browserlist/actions/update_browserlist';

import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
import { AppBar } from '../components/AppBar';

// import { CompoundSlider } from '../components/CompoundSlider';
import { Accordion, AccordionItem } from '../components/Accordion';
import { VersionGrid } from '../components/VersionGrid';
import { scaffolding, common, colours } from '../theme';

import { platform } from '../utils/browserDetails';

interface IProps {
  filtered: any;
}

export const FreeviewContent = styled.div({
  label: 'freeview-content',
  marginTop: common.appBar.height,
  width: '100%',
  minHeight: '100vh',
  position: 'absolute',
  top: '0px',
  left: '0px'
});

class Freeview extends React.Component<IProps> {
  render() {
    const desktop = this.props.filtered.map((browser, i) => {
      if (browser.platform === platform.DESKTOP) {
        return (
          <div key={i} style={{ marginBottom: scaffolding.gutterLg }}>
            <Accordion
              maxHeight="500px"
              type="checkbox"
              name={browser.friendlyName}
              backgroundColour={colours.white}
            >
              <AccordionItem
                id={browser.friendlyName}
                logo={browser.logo}
                percent={browser.percent}
                showBar
                defaultChecked={browser.defaultChecked}
              >
                <VersionGrid data={browser} />
              </AccordionItem>
            </Accordion>
          </div>
        );
      }
    });

    const mobile = this.props.filtered.map((browser, i) => {
      if (browser.platform === platform.MOBILE) {
        return (
          <div key={i} style={{ marginBottom: scaffolding.gutterLg }}>
            <Accordion
              maxHeight="500px"
              type="checkbox"
              name={browser.friendlyName}
              backgroundColour={colours.white}
            >
              <AccordionItem
                id={browser.friendlyName}
                logo={browser.logo}
                percent={browser.percent}
                showBar
                defaultChecked={browser.defaultChecked}
              >
                <VersionGrid data={browser} />
              </AccordionItem>
            </Accordion>
          </div>
        );
      }
    });

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
            <Row
              style={{
                marginBottom: `${scaffolding.gutterLg}`
              }}
            >
              <Col xs={12} sm={12} md={12} lg={6} />
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={6}>
                {desktop}
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                {mobile}
              </Col>
            </Row>
          </Container>
        </FreeviewContent>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  filtered: state.browserlist.filtered
});

const mapDispatchToProps = dispatch => ({
  updateBrowserlist: bindActionCreators(updateBrowserlist, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Freeview);
