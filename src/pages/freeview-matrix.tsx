import * as React from 'react';

import browserslist from 'browserslist';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateBrowserlist } from '../modules/browserlist/actions/update_browserlist';
import { updateGlobalUsage } from '../modules/globalUsage/actions/update_globalUsage';
import { updateYearReleased } from '../modules/yearReleased/actions/update_yearReleased';
import { updateLastVersions } from '../modules/lastVersions/actions/update_lastVersions';

import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
import { AppBar } from '../components/AppBar';

import { CompoundSlider } from '../components/CompoundSlider';
import { Accordion, AccordionItem } from '../components/Accordion';
import { VersionGrid } from '../components/VersionGrid';
import { scaffolding, common, colours } from '../theme';

import { platform } from '../utils/browserDetails';
import { escapeCGI } from '../utils/uri';
import styled from 'react-emotion';

interface IProps {
  filtered: any;
  globalUsage: number | string;
  yearReleased: number | string;
  lastVersions: number | string;
  updateBrowserlist: any;
  updateGlobalUsage: any;
  updateYearReleased: any;
  updateLastVersions: any;
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
  changeUsage(value: Array<number>) {
    this.props.updateGlobalUsage(value[0]);
    this.props.updateBrowserlist(browserslist([`>= ${value[0]}%`]));
    location.hash = escapeCGI(`>= ${value[0]}%`);
  }

  changeYears(value: Array<number>) {
    this.props.updateYearReleased(value[0]);
    this.props.updateBrowserlist(browserslist([`since ${value[0]}`]));
    location.hash = escapeCGI(`since ${value[0]}`);
  }

  changeVersions(value: Array<number>) {
    this.props.updateLastVersions(value[0]);
    this.props.updateBrowserlist(browserslist([`last ${value[0]} versions`]));
    location.hash = escapeCGI(`last ${value[0]} versions`);
  }

  render() {
    const { globalUsage, lastVersions, yearReleased } = this.props;

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
                label={browser.friendlyName}
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
                label={browser.friendlyName}
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
              <Col xs={12} sm={12} md={12} lg={6}>
                <Accordion
                  maxHeight="200px"
                  type="radio"
                  name="controls-accordion"
                >
                  <AccordionItem
                    defaultChecked
                    label="Global Usage"
                    percent={globalUsage}
                  >
                    <CompoundSlider
                      onChange={values => this.changeUsage(values)}
                      showHandleValue
                      domain={[0, 1]}
                      step={0.001}
                      values={[0.02]}
                      tickCount={14}
                    />
                  </AccordionItem>
                  <AccordionItem
                    label="Year Released"
                    statistic={yearReleased}
                    selectColour={colours.teal}
                  >
                    <CompoundSlider
                      onChange={values => this.changeYears(values)}
                      sliderColour={colours.teal}
                      showHandleValue
                      domain={[2010, 2018]}
                      step={1}
                      values={[2015]}
                      tickCount={8}
                    />
                  </AccordionItem>
                  <AccordionItem
                    label="Last versions"
                    statistic={lastVersions}
                    selectColour={colours.blue}
                  >
                    <CompoundSlider
                      onChange={values => this.changeVersions(values)}
                      sliderColour={colours.blue}
                      showHandleValue
                      domain={[1, 20]}
                      step={1}
                      values={[5]}
                      tickCount={20}
                    />
                  </AccordionItem>
                </Accordion>
              </Col>
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
  filtered: state.browserlist.filtered,
  globalUsage: state.globalUsage.value,
  yearReleased: state.yearReleased.value,
  lastVersions: state.lastVersions.value
});

const mapDispatchToProps = dispatch => ({
  updateBrowserlist: bindActionCreators(updateBrowserlist, dispatch),
  updateGlobalUsage: bindActionCreators(updateGlobalUsage, dispatch),
  updateYearReleased: bindActionCreators(updateYearReleased, dispatch),
  updateLastVersions: bindActionCreators(updateLastVersions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Freeview);
