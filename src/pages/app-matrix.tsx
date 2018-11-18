import * as React from 'react';

import { fetchCanIuseData2 } from '../utils/fetch';

import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
import { AppBar } from '../components/AppBar';
import { SideBar } from '../components/SideBar';
import { spaceLg, spaceMd } from '../theme';
import { Accordion, AccordionItem } from '../components/Accordion';
import { RangeSlider } from '../components/RangeSlider';
import { BrowserCard } from '../components/BrowserCard';
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
        return <BrowserCard key={i} data={agents[agent]} />;
      }
    });

    const mobileBrowsers = Object.keys(agents).map((agent, i) => {
      if (agents[agent].type === 'mobile') {
        return <BrowserCard key={i} data={agents[agent]} />;
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
                <Accordion type="radio" name="storybook-accordion">
                  <AccordionItem defaultChecked label="Item 1">
                    <RangeSlider min={1970} max={2018} steps={8} />
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
