import * as React from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'react-grid-system';

import { Accordion, AccordionItem } from '../../components/Accordion';
import { scaffolding, colours } from '../../theme';
import { VersionGrid } from '../../components/VersionGrid';
import { H4 } from '../../typography';
import { platform } from '../../utils/browserDetails';

interface IProps {
  browserList: any;
  queryColour: string;
}
class BrowserCards extends React.Component<IProps, {}> {
  render() {
    const { browserList, queryColour } = this.props;

    const desktop = browserList.map((browser, i) => {
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
                value={{
                  amount: browser.percent,
                  suffix: '%'
                }}
                showBar
                selectColour={queryColour}
                defaultChecked={browser.defaultChecked}
              >
                <VersionGrid data={browser} />
              </AccordionItem>
            </Accordion>
          </div>
        );
      }
    });

    const mobile = browserList.map((browser, i) => {
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
                value={{
                  amount: browser.percent,
                  suffix: '%'
                }}
                showBar
                selectColour={queryColour}
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
      <Row
        style={{
          marginTop: `${scaffolding.gutterLg}`
        }}
      >
        <Col xs={12} sm={12} md={12} lg={6}>
          <H4>Desktop</H4>
          {desktop}
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <H4>Mobile</H4>
          {mobile}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  browserList: state.ui.browserList,
  queryColour: state.ui.queryColour
});

export default connect(mapStateToProps)(BrowserCards);
