import * as React from 'react';

import { fetchCanIuseData2 } from '../utils/fetch';

import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
import { AppBar } from '../components/AppBar';
import { SideBar } from '../components/SideBar';
import { spaceLg, spaceMd } from '../theme';
import { Accordion, AccordionItem } from '../components/Accordion';
import { RangeSlider } from '../components/RangeSlider';
import { VersionGrid } from '../components/VersionGrid';

import { common, colours } from '../theme';

interface IProps {
  data: any;
  isLoading: boolean;
  hasErrored: boolean;
}

class Matrix extends React.Component<IProps> {
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

    const desktopBrowsers = Object.keys(agents).map((agent, i) => {
      if (agents[agent].type === 'desktop') {
        return (
          <React.Fragment key={i}>
            <Accordion
              maxHeight="500px"
              backgroundColour={colours.white}
              type="checkbox"
              name="desktop-accordion"
            >
              <AccordionItem
                defaultChecked={true}
                browser={agents[agent].browser}
                label={agents[agent].browser}
              >
                <VersionGrid data={agents[agent]} />
              </AccordionItem>
            </Accordion>
            <div style={{ height: `${spaceLg}px` }} />
          </React.Fragment>
        );
      }
    });

    const mobileBrowsers = Object.keys(agents).map((agent, i) => {
      if (agents[agent].type === 'mobile') {
        return (
          <React.Fragment key={i}>
            <Accordion
              maxHeight="500px"
              backgroundColour={colours.white}
              type="checkbox"
              name="mobile-accordion"
            >
              <AccordionItem
                defaultChecked={true}
                browser={agents[agent].browser}
                label={agents[agent].browser}
              >
                <VersionGrid data={agents[agent]} />
              </AccordionItem>
            </Accordion>
            <div style={{ height: `${spaceLg}px` }} />
          </React.Fragment>
        );
      }
    });

    return (
      <React.Fragment>
        <HeadTag />
        <AppBar showLogo={false} fixed={true} />
        <SideBar active={true}>
          <Container fluid style={{ margin: `${spaceLg}px ${spaceMd}px` }}>
            <Row style={{ marginBottom: `${spaceLg}px` }}>
              <Col xs={12} sm={12} md={12} lg={6}>
                <Accordion type="radio" name="selectors-accordion">
                  <AccordionItem defaultChecked label="Versions">
                    <RangeSlider min={0} max={80} steps={10} />
                  </AccordionItem>
                  <AccordionItem selectColour={colours.teal} label="Years">
                    <RangeSlider
                      min={1970}
                      max={2018}
                      steps={8}
                      sliderColour={colours.teal}
                    />
                  </AccordionItem>
                  <AccordionItem
                    selectColour={colours.blue}
                    label="Global Usage"
                  >
                    <RangeSlider
                      min={0.01}
                      max={4}
                      steps={4}
                      sliderColour={colours.blue}
                    />
                  </AccordionItem>
                </Accordion>
              </Col>
            </Row>
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
