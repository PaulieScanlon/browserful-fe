import * as React from 'react';

import Link from 'next/link';
import { RouterLink } from '../../../common/RouterLink';

import { Container, Row, Col } from 'react-grid-system';

import { HeadTag } from '../../../ui/HeadTag';
import { AppBar } from '../../../ui/AppBar';
import { Button } from '../../../ui/Button';
import { H1, H4, P } from '../../../ui/Typography';

import { common, colours } from '../../../theme';

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
                  Using our easy to use sliders you can configure a matrix to
                  show exactly which browsers you support and which browsers you
                  don’t.
                </P>
                <Link href="/freeview/matrix">
                  <a className={`${RouterLink}`}>
                    <Button>Try for free</Button>
                  </a>
                </Link>
              </CopyWrapper>
              <LandingImage src="/static/images/landing-page.jpg" />
            </LandingContent>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default LandingPage;
