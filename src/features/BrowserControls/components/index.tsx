import * as React from 'react';

import { Row, Col } from 'react-grid-system';

import { scaffolding, colours } from '../../../theme';
import { BrowserCard } from './BrowserCard';

import { comparisonQuery } from '../../../utils/matrix-utils/comparison-query';
import { constructMatrix } from '../../../utils/matrix-utils/constructMatrix';

import { queryParams } from '../../../utils/queryStrings';
import { urlSetter } from '../../../utils/urlSetter';
import { arrayAdd } from '../../../utils/arrayAdd';
import { arrayRemove } from '../../../utils/arrayRemove';

import { TitleBar } from '../../../ui/TitleBar';

interface IProps {
  queryType: string;
  queryColour: string;
  incQuery: Array<String>;
  excQuery: Array<String>;
  browserQuery: string;
  updateAuto: any;
  updateIncluded: any;
  updateExcluded: any;
}
export class BrowserControls extends React.Component<IProps, {}> {
  onAutoChange(queryName: string) {
    const { incQuery, excQuery } = this.props;

    this.props.updateAuto(incQuery, excQuery, queryName);
    urlSetter(
      queryParams.INCLUDED_QUERY,
      arrayRemove(incQuery, queryName).join()
    );
    urlSetter(
      queryParams.EXCLUDED_QUERY,
      arrayRemove(excQuery, queryName).join()
    );
  }

  onIncludeChange(queryName: string) {
    const { incQuery, excQuery } = this.props;

    this.props.updateIncluded(incQuery, excQuery, queryName);
    urlSetter(queryParams.INCLUDED_QUERY, arrayAdd(incQuery, queryName).join());
  }

  onExcludeChange(queryName: string) {
    const { incQuery, excQuery } = this.props;

    this.props.updateExcluded(incQuery, excQuery, queryName);
    urlSetter(queryParams.EXCLUDED_QUERY, arrayAdd(excQuery, queryName).join());
  }

  render() {
    const {
      browserQuery,
      queryType,
      incQuery,
      excQuery,
      queryColour
    } = this.props;

    const matrix = constructMatrix(
      browserQuery,
      comparisonQuery[queryType],
      incQuery,
      excQuery
    );

    const { browserList } = matrix;

    const desktopBrowserCards = browserList.desktop.map((browser, i) => {
      return (
        <div key={i} style={{ marginBottom: scaffolding.gutterLg }}>
          <BrowserCard
            browser={browser}
            queryColour={queryColour}
            onAutoChange={queryName => this.onAutoChange(queryName)}
            onIncludeChange={queryName => this.onIncludeChange(queryName)}
            onExcludeChange={queryName => this.onExcludeChange(queryName)}
          />
        </div>
      );
    });

    const mobileBrowserCards = browserList.mobile.map((browser, i) => {
      return (
        <div key={i} style={{ marginBottom: scaffolding.gutterLg }}>
          <BrowserCard
            browser={browser}
            queryColour={queryColour}
            onAutoChange={queryName => this.onAutoChange(queryName)}
            onIncludeChange={queryName => this.onIncludeChange(queryName)}
            onExcludeChange={queryName => this.onExcludeChange(queryName)}
          />
        </div>
      );
    });

    return (
      <Row
        style={{
          marginTop: scaffolding.gutterLg
        }}
      >
        <Col xs={12} sm={12} md={12} lg={6}>
          <TitleBar
            icon="bars"
            highlightColour={colours.blue}
            title="Desktop"
          />

          {desktopBrowserCards}
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <TitleBar
            icon="bars"
            highlightColour={colours.teal}
            title="Mobile / Other"
          />

          {mobileBrowserCards}
        </Col>
      </Row>
    );
  }
}
