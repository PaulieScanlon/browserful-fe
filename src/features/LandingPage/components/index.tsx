import * as React from 'react';

import Link from 'next/link';
import { RouterLink } from '../../../common/RouterLink';

import { Container, Row, Col, Hidden } from 'react-grid-system';

import { HeadTag } from '../../../ui/HeadTag';
import { AppBar } from '../../../ui/AppBar';
import { Button } from '../../../ui/Button';
import { H1, H4, P } from '../../../ui/Typography';

import { common, colours, scaffolding } from '../../../theme';

import { LandingContent, LandingImage, CopyWrapper } from './styles';

const LandingPage: React.SFC = () => {
  return (
    <React.Fragment>
      <HeadTag />
      <AppBar fixed={true} width="100%" />

      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <LandingContent>
              <CopyWrapper>
                <H1
                  style={{ paddingTop: common.appBar.height }}
                  fontAlign="center"
                >
                  Last 5 versions, > 0.1%, not dead
                </H1>
                <H4 fontAlign="center" fontColour={colours.greyMid}>
                  This is confusing. Browserful isn’t!
                </H4>
                <P fontAlign="center">
                  Use our easy to use sliders to configure a shareable matrix to
                  show exactly which browsers you support, and which browsers
                  you don’t!
                </P>
                <Link href="/freeview/matrix">
                  <a
                    className={`${RouterLink}`}
                    style={{ marginTop: scaffolding.gutterLg }}
                  >
                    <Button size="lg">Try for free</Button>
                  </a>
                </Link>
              </CopyWrapper>
              <Hidden xs>
                <LandingImage src="/static/images/landing-page-lg.jpg" />
              </Hidden>
              <Hidden sm md lg xl>
                <LandingImage src="/static/images/landing-page-sm.jpg" />
              </Hidden>
            </LandingContent>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default LandingPage;
