import * as React from 'react';

import Link from 'next/link';
import styled from 'react-emotion';

import { RouterLink } from '../common/RouterLink';

import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
import { AppBar } from '../components/AppBar';
import { H1, H4, P } from '../typography';
import { BrowserfulLogo } from '../components/BrowserfulLogo';

import { common, scaffolding, colours } from '../theme';
import { Button } from '../components/Button';

export const LandingContent = styled.div({
  label: 'landking-content',
  display: 'flex',
  alignItems: 'center',
  marginTop: common.appBar.height,
  width: '100%',
  minHeight: `calc(100vh - ${common.appBar.height})`,
  position: 'absolute',
  top: '0px',
  left: '0px',
  backgroundColor: colours.white
});

export const CopyWrapper = styled.div({
  label: 'copy-wrapper',
  display: 'flex',
  height: '100%',
  marginBottom: scaffolding.gutterXl
});

export const Copy = styled.div({
  label: 'copy',
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center'
});

export const Panel = styled.div({
  label: 'panel',
  position: 'relative',
  border: `1px solid ${colours.offWhite}`,
  borderRadius: '5px'
});

export const PanelInner = styled.div({
  label: 'panel-inner',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: `${scaffolding.gutterLg}`
});

class Index extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <HeadTag />
        <AppBar fixed={true} width="100%" />
        <LandingContent>
          <Container>
            <Row>
              <Col xs={12} sm={12} md={7} lg={8}>
                <CopyWrapper>
                  <Copy>
                    <H1>Last 5 versions, > 0.1%, not dead</H1>
                    <H4 fontColour={colours.greyMid}>
                      This is confusing. Browserful isn’t!
                    </H4>
                    <P>
                      Using our easy to use sliders you can configure a matrix
                      to show exactly which browsers you support and which
                      browsers you don’t.
                    </P>
                  </Copy>
                </CopyWrapper>
              </Col>

              <Col xs={12} sm={12} md={5} lg={4}>
                <Panel>
                  <PanelInner>
                    <BrowserfulLogo
                      showText={false}
                      logoColour={colours.teal}
                    />
                    <H4 style={{ marginTop: `${scaffolding.gutterLg}` }}>
                      Get started
                    </H4>
                    <P style={{ marginBottom: scaffolding.gutterXl }}>
                      Give the beta a whirl and create your own shareable
                      matrix.
                    </P>
                    <Link href="/freeview/matrix?yearReleased#since+2013">
                      <a className={`${RouterLink}`}>
                        <Button grow backgroundColour={colours.teal}>
                          Try for free
                        </Button>
                      </a>
                    </Link>
                  </PanelInner>
                </Panel>
              </Col>
            </Row>
          </Container>
        </LandingContent>
      </React.Fragment>
    );
  }
}

export default Index;
