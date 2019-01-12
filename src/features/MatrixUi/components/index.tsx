import * as React from 'react';
import { Row, Col } from 'react-grid-system';

import { IProps } from '../types';

import { SliderControls } from './SliderControls';
import { BrowserAccordion } from './BrowserAccordion';
import { Stats } from './Stats';

import { TitleBar } from '../../../ui/TitleBar';
import {
  LabelTextRegular,
  LabelTextBold,
  LabelTextItalic
} from '../../../ui/Typography';

import { colours } from '../../../theme';

export class MatrixUi extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const {
      queryType,
      slidervValues,
      browserList,
      includedList,
      excludedList,
      total,
      handleAccordionChange,
      handleSliderChange,
      handleAutoChange,
      handleIncludeChange,
      handleExcludeChange
    } = this.props;

    return (
      <React.Fragment>
        <Row>
          <Col xs={12} sm={12} md={12} lg={8}>
            <SliderControls
              queryType={queryType}
              handleAccordionChange={handleAccordionChange}
              handleSliderChange={handleSliderChange}
              slidervValues={slidervValues}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <Stats
              includedList={includedList}
              excludedList={excludedList}
              total={total}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6}>
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
          <Col xs={12} sm={12} md={6} lg={6}>
            <TitleBar
              highlightColour={colours.teal}
              icon="bars"
              title="Mobile / Other"
              renderStats={() => [
                <LabelTextBold key="amount">
                  {includedList.mobile}&nbsp;
                </LabelTextBold>,
                <LabelTextItalic key="of">of&nbsp;</LabelTextItalic>,
                <LabelTextBold key="total">&nbsp;{total.mobile}</LabelTextBold>,
                <LabelTextRegular key="text">&nbsp;included</LabelTextRegular>
              ]}
            />
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
