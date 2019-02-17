import * as React from 'react';
import { Row, Col, Container } from 'react-grid-system';

import { IProps } from '../types';

import { TitleBar } from '../../../ui/TitleBar';
import { EditInput } from '../../../ui/EditInput';

import { SliderControls } from './SliderControls';
import { BrowserAccordion } from './BrowserAccordion';
import { Stats } from './Stats';
import { Chart } from './Chart';
import { PostCss } from './PostCss';

import { LabelTextBold } from '../../../ui/Typography';
import { EmptyState } from '../../../ui/EmptyState';

import { colours, scaffolding, breakpoints } from '../../../theme';
import { ColContainer, ReactGridStyemOverride } from './styles';

export class MatrixUi extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const {
      slidervValues,
      mn,
      browserQuery,
      browserList,
      includedTotal,
      excludedTotal,
      total,
      handleAccordionChange,
      handleSliderChange,
      handleNameChange,
      handleAutoChange,
      handleIncludeChange,
      handleExcludeChange
    } = this.props;

    return (
      <React.Fragment>
        <div
          style={{
            backgroundColor: colours.appBlack
          }}
        >
          <Container
            fluid
            style={{
              maxWidth: breakpoints.xxl
            }}
          >
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <div style={{ height: scaffolding.gutterLg }} />
                <TitleBar
                  backgrondColour={colours.greyDark}
                  style={{ marginBottom: scaffolding.gutterLg }}
                  renderStats={() => (
                    <EditInput
                      html={mn}
                      onBlur={event =>
                        handleNameChange(event.currentTarget.innerHTML)
                      }
                    />
                  )}
                />
              </Col>
            </Row>

            <Row>
              <SliderControls
                mn={mn}
                handleAccordionChange={handleAccordionChange}
                handleSliderChange={handleSliderChange}
                handleNameChange={handleNameChange}
                slidervValues={slidervValues}
              />
            </Row>

            {browserQuery && (
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  style={{ ...ReactGridStyemOverride }}
                >
                  <ColContainer alignment="center">
                    <Stats
                      includedTotal={includedTotal}
                      excludedTotal={excludedTotal}
                    />
                  </ColContainer>
                </Col>

                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  style={{ ...ReactGridStyemOverride }}
                >
                  <ColContainer alignment="center">
                    <Chart
                      key={Math.random() * 10}
                      includedTotal={includedTotal}
                      excludedTotal={excludedTotal}
                      total={total}
                    />
                  </ColContainer>
                </Col>

                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={4}
                  style={{ ...ReactGridStyemOverride }}
                >
                  <ColContainer breakpoint={2}>
                    <PostCss browserQuery={browserQuery} />
                  </ColContainer>
                </Col>
              </Row>
            )}
          </Container>
        </div>
        <div style={{ height: scaffolding.gutterLg }} />
        {browserQuery ? (
          <Container>
            <Row>
              <Col xs={12} sm={12} md={12} lg={6}>
                <ColContainer>
                  <TitleBar
                    highlightColour={colours.blue}
                    icon="bars"
                    title="Desktop"
                    renderStats={() => (
                      <LabelTextBold>
                        {includedTotal.desktop}&nbsp;
                      </LabelTextBold>
                    )}
                  />
                </ColContainer>

                {browserList.desktop.map((browser, index) => {
                  return (
                    <BrowserAccordion
                      key={index}
                      browser={browser}
                      selectColour={colours.blue}
                      handleAutoChange={handleAutoChange}
                      handleIncludeChange={handleIncludeChange}
                      handleExcludeChange={handleExcludeChange}
                    />
                  );
                })}
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <ColContainer>
                  <TitleBar
                    highlightColour={colours.teal}
                    icon="bars"
                    title="Mobile / Other"
                    renderStats={() => (
                      <LabelTextBold>{includedTotal.mobile}</LabelTextBold>
                    )}
                  />
                </ColContainer>

                {browserList.mobile.map((browser, index) => {
                  return (
                    <BrowserAccordion
                      key={index}
                      browser={browser}
                      selectColour={colours.teal}
                      handleAutoChange={handleAutoChange}
                      handleIncludeChange={handleIncludeChange}
                      handleExcludeChange={handleExcludeChange}
                    />
                  );
                })}
              </Col>
            </Row>
          </Container>
        ) : (
          <EmptyState
            mainMessage="No browsers to display! 👻"
            subMessage="Select at least one of the sliders"
          />
        )}
      </React.Fragment>
    );
  }
}
