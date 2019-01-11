import * as React from 'react';
import { Row, Col } from 'react-grid-system';

import { urlValidator } from '../../../utils/url-utils/urlValidator';
import { urlGetter } from '../../../utils/url-utils/urlGetter';
import { urlSetter } from '../../../utils/url-utils/urlSetter';
import { constructMatrix } from '../../../utils/matrix-utils/constructMatrix';
import { comparisonQuery } from '../../../utils/matrix-utils/comparison-query';
import { queryBuilder } from '../../../utils/query-utils/queryBuilder';
import { queryParams } from '../../../utils/query-utils/enums';
import { arrayAdd } from '../../../utils/array-utils/arrayAdd';
import { arrayRemove } from '../../../utils/array-utils/arrayRemove';

import { IProps, IState } from '../types';

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

export class FreeviewMatrixUi extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoaded: false
    };
    this.handleAccordionChange = this.handleAccordionChange.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleAutoChange = this.handleAutoChange.bind(this);
    this.handleIncludeChange = this.handleIncludeChange.bind(this);
    this.handleExcludeChange = this.handleExcludeChange.bind(this);
  }

  // freeview only
  componentDidMount() {
    history.replaceState({}, '', `${urlValidator()}`);

    const { updateQuery, updateValue, updateIncExc } = this.props;

    const qt = urlGetter().qt;
    const sv = urlGetter().sv;
    const incq = urlGetter()
      [queryParams.INCLUDED_QUERY].toString()
      .split(',');
    const excq = urlGetter()
      [queryParams.EXCLUDED_QUERY].toString()
      .split(',');

    updateQuery(qt);
    updateValue(qt, sv);
    updateIncExc(incq, excq);

    this.setState({
      isLoaded: true
    });
  }

  handleAccordionChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { updateQuery } = this.props;
    const qt = event.currentTarget.id;
    updateQuery(qt);

    // freeview only
    urlSetter('qt', qt);
    urlSetter('sv', this.props[qt]);
  }

  handleSliderChange(value: number, id: string) {
    const { updateValue } = this.props;
    const qt = id;
    const sv = value;
    updateValue(qt, sv);

    // freeview only
    urlSetter('qt', qt);
    urlSetter('sv', sv);
  }

  handleAutoChange(query: string) {
    const { updateAuto, incQuery, excQuery } = this.props;
    updateAuto(incQuery, excQuery, query);

    // freeview only
    urlSetter(queryParams.EXCLUDED_QUERY, arrayRemove(excQuery, query).join());
    urlSetter(queryParams.INCLUDED_QUERY, arrayRemove(incQuery, query).join());
  }

  handleIncludeChange(query: string) {
    const { updateIncluded, incQuery, excQuery } = this.props;
    updateIncluded(incQuery, excQuery, query);

    // freeview only
    urlSetter(queryParams.EXCLUDED_QUERY, arrayRemove(excQuery, query).join());
    urlSetter(queryParams.INCLUDED_QUERY, arrayAdd(incQuery, query).join());
  }

  handleExcludeChange(query: string) {
    const { updateExcluded, incQuery, excQuery } = this.props;
    updateExcluded(incQuery, excQuery, query);

    // freeview only
    urlSetter(queryParams.INCLUDED_QUERY, arrayRemove(incQuery, query).join());
    urlSetter(queryParams.EXCLUDED_QUERY, arrayAdd(excQuery, query).join());
  }

  render() {
    const { isLoaded } = this.state;
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

    let matrix: any = {};
    {
      if (isLoaded) {
        matrix = constructMatrix(
          browserQuery,
          comparisonQuery[queryType],
          incQuery,
          excQuery
        );
      }
    }

    return (
      <React.Fragment>
        {isLoaded && (
          <Row>
            <Col xs={12} sm={12} md={7} lg={8}>
              <SliderControls
                queryType={queryType}
                handleAccordionChange={this.handleAccordionChange}
                handleSliderChange={this.handleSliderChange}
                slidervValues={slidervValues}
              />
            </Col>
            <Col xs={12} sm={12} md={5} lg={4}>
              <Stats
                includedList={matrix.includedList}
                excludedList={matrix.excludedList}
                total={matrix.total}
              />
            </Col>
          </Row>
        )}
        {isLoaded && (
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
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
            <Col xs={12} sm={12} md={6} lg={6}>
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
        )}
      </React.Fragment>
    );
  }
}
