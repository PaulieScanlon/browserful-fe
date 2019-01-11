import * as React from 'react';
import { Row, Col } from 'react-grid-system';

import { constructMatrix } from '../../../utils/matrix-utils/constructMatrix';
import { comparisonQuery } from '../../../utils/matrix-utils/comparison-query';
import { queryBuilder } from '../../../utils/query-utils/queryBuilder';

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

export class AppMatrixUi extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
    this.handleAccordionChange = this.handleAccordionChange.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleAutoChange = this.handleAutoChange.bind(this);
    this.handleIncludeChange = this.handleIncludeChange.bind(this);
    this.handleExcludeChange = this.handleExcludeChange.bind(this);
  }

  handleAccordionChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { updateQuery } = this.props;
    const qt = event.currentTarget.id;
    updateQuery(qt);
  }

  handleSliderChange(value: number, id: string) {
    const { updateValue } = this.props;
    const qt = id;
    const sv = value;
    updateValue(qt, sv);
  }

  handleAutoChange(query: string) {
    const { updateAuto, incQuery, excQuery } = this.props;
    updateAuto(incQuery, excQuery, query);
  }

  handleIncludeChange(query: string) {
    const { updateIncluded, incQuery, excQuery } = this.props;
    updateIncluded(incQuery, excQuery, query);
  }

  handleExcludeChange(query: string) {
    const { updateExcluded, incQuery, excQuery } = this.props;
    updateExcluded(incQuery, excQuery, query);
  }

  render() {
    const {
      queryType,
      lastVersions,
      globalUsage,
      yearReleased,
      incQuery,
      excQuery
    } = this.props;

    const slidervValues = {
      lastVersions,
      globalUsage,
      yearReleased
    };

    const browserQuery = queryBuilder(
      queryType,
      slidervValues[queryType],
      incQuery,
      excQuery
    );

    const matrix = constructMatrix(
      browserQuery,
      comparisonQuery[queryType],
      incQuery,
      excQuery
    );

    return (
      <React.Fragment>
        <Row>
          <Col xs={12} sm={12} md={12} lg={8}>
            <SliderControls
              queryType={queryType}
              handleAccordionChange={this.handleAccordionChange}
              handleSliderChange={this.handleSliderChange}
              slidervValues={slidervValues}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <Stats
              includedList={matrix.includedList}
              excludedList={matrix.excludedList}
              total={matrix.total}
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
                  {matrix.includedList.desktop}&nbsp;
                </LabelTextBold>,
                <LabelTextItalic key="of">of&nbsp;</LabelTextItalic>,
                <LabelTextBold key="total">
                  &nbsp;{matrix.total.desktop}
                </LabelTextBold>,
                <LabelTextRegular key="text">&nbsp;included</LabelTextRegular>
              ]}
            />
            {matrix.browserList.desktop.map((browser, index) => {
              return (
                <BrowserAccordion
                  key={index}
                  browser={browser}
                  handleAutoChange={this.handleAutoChange}
                  handleIncludeChange={this.handleIncludeChange}
                  handleExcludeChange={this.handleExcludeChange}
                />
              );
            })}
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}>
            <TitleBar
              highlightColour={colours.teal}
              icon="bars"
              title="Mobile / Other"
              renderStats={() => [
                <LabelTextBold key="amount">
                  {matrix.includedList.mobile}&nbsp;
                </LabelTextBold>,
                <LabelTextItalic key="of">of&nbsp;</LabelTextItalic>,
                <LabelTextBold key="total">
                  &nbsp;{matrix.total.mobile}
                </LabelTextBold>,
                <LabelTextRegular key="text">&nbsp;included</LabelTextRegular>
              ]}
            />
            {matrix.browserList.mobile.map((browser, index) => {
              return (
                <BrowserAccordion
                  key={index}
                  browser={browser}
                  handleAutoChange={this.handleAutoChange}
                  handleIncludeChange={this.handleIncludeChange}
                  handleExcludeChange={this.handleExcludeChange}
                />
              );
            })}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
