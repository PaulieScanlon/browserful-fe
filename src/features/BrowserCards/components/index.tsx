import * as React from 'react';

import { Col } from 'react-grid-system';

import { TitleBar } from '../../../ui/TitleBar';
import { BrowserAccordion } from './BrowserAccordion';

import { comparisonQuery } from '../../../utils/matrix-utils/comparison-query';
import { constructMatrix } from '../../../utils/matrix-utils/constructMatrix';

import { queryParams } from '../../../utils/query-utils/enums';
import { urlSetter } from '../../../utils/url-utils/urlSetter';
import { arrayAdd } from '../../../utils/array-utils/arrayAdd';
import { arrayRemove } from '../../../utils/array-utils/arrayRemove';

// import { scaffolding, colours } from '../../../theme';

// import {
//   LabelTextBold,
//   LabelTextItalic,
//   LabelTextRegular
// } from '../../../ui/Typography';

interface IProps {
  //common start
  browserQuery: string;
  queryType: string;
  incQuery: Array<String>;
  excQuery: Array<String>;
  // common end
  updateAuto: any;
  updateIncluded: any;
  updateExcluded: any;
}
export class BrowserCards extends React.Component<IProps, {}> {
  onAutoChange(query: string) {}

  onIncludeChange(query: string) {}

  onExcludeChange(query: string) {}

  render() {
    <div>BrowserCards index</div>;
    // const { browserQuery, queryType, incQuery, excQuery } = this.props;

    // const matrix = constructMatrix(
    //   browserQuery,
    //   comparisonQuery[queryType],
    //   incQuery,
    //   excQuery
    // );

    // const { browserList, includedList, total } = matrix;

    // const desktopBrowserCards = browserList.desktop.map((browser, i) => {
    //   return (
    //     <div key={i} style={{ marginBottom: scaffolding.gutterLg }}>
    //       <BrowserAccordion
    //         browser={browser}
    //         highlightColour={colours.blue}
    //         onAutoChange={query => this.onAutoChange(query)}
    //         onIncludeChange={query => this.onIncludeChange(query)}
    //         onExcludeChange={query => this.onExcludeChange(query)}
    //       />
    //     </div>
    //   );
    // });

    // const mobileBrowserCards = browserList.mobile.map((browser, i) => {
    //   return (
    //     <div key={i} style={{ marginBottom: scaffolding.gutterLg }}>
    //       <BrowserAccordion
    //         browser={browser}
    //         highlightColour={colours.teal}
    //         onAutoChange={query => this.onAutoChange(query)}
    //         onIncludeChange={query => this.onIncludeChange(query)}
    //         onExcludeChange={query => this.onExcludeChange(query)}
    //       />
    //     </div>
    //   );
    // });

    return (
      <React.Fragment>
        <div>BrowserCards index</div>
        {/* <Col xs={12} sm={12} md={12} lg={6}>
          <TitleBar
            icon="bars"
            highlightColour={colours.blue}
            title="Desktop"
            renderStats={() => [
              <LabelTextBold key="amount">
                {includedList.desktop}&nbsp;
              </LabelTextBold>,
              <LabelTextItalic key="of">of&nbsp;</LabelTextItalic>,
              <LabelTextBold key="total">&nbsp;{total.desktop}</LabelTextBold>,
              <LabelTextRegular key="text">&nbsp;included</LabelTextRegular>
            ]}
          />
          {desktopBrowserCards}
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <TitleBar
            icon="bars"
            highlightColour={colours.teal}
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
          {mobileBrowserCards}
        </Col> */}
      </React.Fragment>
    );
  }
}
