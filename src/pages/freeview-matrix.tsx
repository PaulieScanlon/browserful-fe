import * as React from 'react';

import browserslist from 'browserslist';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateBrowserlist } from '../modules/browserlist/actions/update_browserlist';

import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
import { AppBar } from '../components/AppBar';

import { CompoundSlider } from '../components/CompoundSlider';
import { Accordion, AccordionItem } from '../components/Accordion';
import { VersionGrid } from '../components/VersionGrid';
import { scaffolding, common, colours } from '../theme';

import { platform } from '../utils/friendlyIfy';
import styled from 'react-emotion';

interface IProps {
  result: any;
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
  onUpdate(value: Array<number>) {
    // console.log(`> ${value[0]}%`);
    this.props.updateBrowserlist(browserslist([`> ${value[0]}%`]));
  }

  render() {
    const desktop = this.props.result.map((browser, i) => {
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
                label={browser.friendlyName}
                browser={browser.logo}
                defaultChecked={browser.defaultChecked}
              >
                <VersionGrid data={browser} />
              </AccordionItem>
            </Accordion>{' '}
          </div>
        );
      }
    });

    const mobile = this.props.result.map((browser, i) => {
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
                label={browser.friendlyName}
                browser={browser.logo}
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
              <Col xs={12} sm={12} md={12} lg={12}>
                <Accordion
                  maxHeight="200px"
                  type="checkbox"
                  name="storybook-accordion"
                >
                  <AccordionItem defaultChecked label="Global Usage > {x}%">
                    <CompoundSlider
                      onUpdate={values => this.onUpdate(values)}
                      showHandleValue
                      domain={[0, 1]}
                      step={0.001}
                      values={[0.02]}
                      tickCount={14}
                    />
                  </AccordionItem>
                </Accordion>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6} md={6} lg={6}>
                {desktop}
              </Col>
              <Col xs={12} sm={6} md={6} lg={6}>
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
  result: state.browserlist.result
});

const mapDispatchToProps = dispatch => ({
  updateBrowserlist: bindActionCreators(updateBrowserlist, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Freeview);
