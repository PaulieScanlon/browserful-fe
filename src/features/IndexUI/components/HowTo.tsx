import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import { H2, P } from '../../../ui/Typography';

import {
  DescriptionList,
  DescriptionTerm,
  DescriptionDescription
} from '../../../ui/DescriptionList';
import { Icon } from '../../../ui/Icon';
import { colours } from '../../../theme';

import { HowToWrapper, HowToSection, HowToImage } from './styles';

export const HowTo: React.SFC = () => {
  return (
    <HowToWrapper>
      <Container>
        <Row align="center">
          <Col xs={12} sm={12} md={12} lg={12}>
            <div
              style={{
                textAlign: 'center',
                margin: '40px 0px'
              }}
            >
              <Icon name="help" size="xl" fill={colours.pink} />
            </div>
          </Col>
        </Row>

        <HowToSection>
          <Row align="center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <H2>Sliders</H2>
              <P>
                Browserful works by showing you a list of browsers and their
                respective versions. The version numbers you'll see are within
                the range selected by one of the sliders.
              </P>
              <DescriptionList>
                <DescriptionTerm>Last Versions (x)</DescriptionTerm>
                <DescriptionDescription>
                  E.g the last 5 browser versions released
                </DescriptionDescription>

                <DescriptionTerm>Global Usage (x)%</DescriptionTerm>
                <DescriptionDescription>
                  E.g all browser versions released with a greater global usage
                  of 0.3%
                </DescriptionDescription>

                <DescriptionTerm>Year Released (x)</DescriptionTerm>
                <DescriptionDescription>
                  E.g all browser versions released since 2015
                </DescriptionDescription>
              </DescriptionList>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <HowToImage src="static/images/slider-panel.jpg" />
            </Col>
          </Row>
        </HowToSection>

        <HowToSection>
          <Row align="center">
            <Col xs={12} sm={12} md={6} lg={6} push={{ md: 6, lg: 6 }}>
              <H2>Versions</H2>
              <P>
                After you select a range Browserful will show you the respective
                browsers and versions.
              </P>
              <DescriptionList>
                <DescriptionTerm bulletColour={colours.green}>
                  Green
                </DescriptionTerm>
                <DescriptionDescription>
                  Indicates if a version is included from the set range
                </DescriptionDescription>
                <DescriptionTerm bulletColour={colours.red}>
                  Red
                </DescriptionTerm>
                <DescriptionDescription>
                  Indicates if a version is excluded from the set range
                </DescriptionDescription>
              </DescriptionList>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} pull={{ md: 6, lg: 6 }}>
              <HowToImage src="static/images/version-panel.jpg" />
            </Col>
          </Row>
        </HowToSection>

        <HowToSection style={{ marginBottom: '0px' }}>
          <Row align="center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <H2>Overrides</H2>
              <P>
                Sometimes you may need to include or exclude a version
                regardless of the set range. You can override this behavior by
                clicking on a version and selecting from one of the following
                options.
              </P>
              <DescriptionList>
                <DescriptionTerm>Automatic mode</DescriptionTerm>
                <DescriptionDescription>
                  By default the version will be included if it’s within the set
                  range
                </DescriptionDescription>

                <DescriptionTerm bulletColour={colours.green}>
                  Always Include
                </DescriptionTerm>
                <DescriptionDescription>
                  Always include this version regardless of the set range
                </DescriptionDescription>

                <DescriptionTerm bulletColour={colours.red}>
                  Always Exclude
                </DescriptionTerm>
                <DescriptionDescription>
                  Always exclude this version regardless of the set range
                </DescriptionDescription>
              </DescriptionList>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <HowToImage src="static/images/overrides-panel.jpg" />
            </Col>
          </Row>
        </HowToSection>
      </Container>
    </HowToWrapper>
  );
};
