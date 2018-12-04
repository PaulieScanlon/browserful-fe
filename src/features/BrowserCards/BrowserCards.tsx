import * as React from 'react';

import { Row, Col } from 'react-grid-system';

import { Accordion, AccordionItem } from '../../components/Accordion';
import { scaffolding, colours } from '../../theme';
import { VersionGrid } from '../../components/VersionGrid';
import { H4 } from '../../typography';
import { platform } from '../../utils/browserDetails';

interface IProps {
  filtered: any;
  queryColour: string;
}

export const BrowserCards: React.SFC<IProps> = ({
  filtered,
  queryColour
}: IProps) => {
  const desktop = filtered.map((browser, i) => {
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

  const mobile = filtered.map((browser, i) => {
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
};
