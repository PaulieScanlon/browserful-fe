import * as React from 'react';
import { Row, Col } from 'react-grid-system';

import { IProps } from '../types';

import { SliderControls } from './SliderControls';
import { BrowserAccordion } from './BrowserAccordion';
import { Stats } from './Stats';
import { Chart } from './Chart';
import { PostCss } from './PostCss';

import { TitleBar } from '../../../ui/TitleBar';
import { LabelTextBold } from '../../../ui/Typography';
import { EmptyState } from '../../../ui/EmptyState';

import { colours } from '../../../theme';
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
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <SliderControls
              mn={mn}
              handleAccordionChange={handleAccordionChange}
              handleSliderChange={handleSliderChange}
              handleNameChange={handleNameChange}
              slidervValues={slidervValues}
            />
          </Col>
        </Row>

        {browserQuery ? (
          <React.Fragment>
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
          </React.Fragment>
        ) : (
          <EmptyState
            mainMessage="No browsers to display! 👻"
            subMessage="Select at least one slider"
          />
        )}
      </React.Fragment>
    );
  }
}
