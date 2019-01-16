import * as React from 'react';
import { Row, Col } from 'react-grid-system';

import { IProps } from '../types';

import { SliderControls } from './SliderControls';
import { BrowserAccordion } from './BrowserAccordion';
import { Stats } from './Stats';
import { Chart } from './Chart';
import { PostCss } from './PostCss';

import { TitleBar } from '../../../ui/TitleBar';
import {
  LabelTextRegular,
  LabelTextBold,
  LabelTextItalic
} from '../../../ui/Typography';

import { colours, scaffolding } from '../../../theme';
import { ColContainer } from './styles';

const colMinHeight = '220px';

export class MatrixUi extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const {
      queryType,
      slidervValues,
      matrixName,
      browserQuery,
      browserList,
      includedList,
      excludedList,
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
              queryType={queryType}
              matrixName={matrixName}
              handleAccordionChange={handleAccordionChange}
              handleSliderChange={handleSliderChange}
              handleNameChange={handleNameChange}
              slidervValues={slidervValues}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={6} lg={4}>
            <ColContainer minHeight={colMinHeight}>
              <Stats />
            </ColContainer>
            <div style={{ height: scaffolding.gutterLg }} />
          </Col>

          <Col xs={12} sm={12} md={6} lg={4}>
            <ColContainer minHeight={colMinHeight} alignment="center">
              <Chart
                key={Math.random() * 10}
                includedList={includedList}
                excludedList={excludedList}
                total={total}
              />
            </ColContainer>
            <div style={{ height: scaffolding.gutterLg }} />
          </Col>

          <Col xs={12} sm={12} md={12} lg={4}>
            <ColContainer minHeight={colMinHeight} breakpoint={2}>
              <PostCss browserQuery={browserQuery} />
            </ColContainer>
            <div style={{ height: scaffolding.gutterLg }} />
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={6}>
            <ColContainer>
              <TitleBar
                highlightColour={colours.blue}
                icon="bars"
                title="Desktop"
                renderStats={() => [
                  <LabelTextBold key="amount">
                    {includedList.desktop}&nbsp;
                  </LabelTextBold>,
                  <LabelTextItalic key="of">of&nbsp;</LabelTextItalic>,
                  <LabelTextBold key="total">
                    &nbsp;{total.desktop}
                  </LabelTextBold>,
                  <LabelTextRegular key="text">&nbsp;included</LabelTextRegular>
                ]}
              />
            </ColContainer>
            <div style={{ height: scaffolding.gutterLg }} />

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
                renderStats={() => [
                  <LabelTextBold key="amount">
                    {includedList.mobile}&nbsp;
                  </LabelTextBold>,
                  <LabelTextItalic key="of">of&nbsp;</LabelTextItalic>,
                  <LabelTextBold key="total">
                    &nbsp;{total.mobile}
                  </LabelTextBold>,
                  <LabelTextRegular key="text">&nbsp;included</LabelTextRegular>
                ]}
              />
            </ColContainer>
            <div style={{ height: scaffolding.gutterLg }} />

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
    );
  }
}
