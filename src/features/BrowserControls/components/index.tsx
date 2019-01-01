import * as React from 'react';

import { Row, Col } from 'react-grid-system';

import { scaffolding } from '../../../theme';
import { BrowserCard } from './BrowserCard';

import { Icon } from '../../../ui/Icon';
import { H5 } from '../../../ui/Typography';

import { platform } from '../../../utils/browserDetails';

import { constructMatrix } from '../../../utils/matrix-utils/constructMatrix';

import { queryParams } from '../../../utils/queryStrings';
import { urlSetter } from '../../../utils/urlSetter';
import { arrayAdd } from '../../../utils/arrayAdd';
import { arrayRemove } from '../../../utils/arrayRemove';

import { TitleBar } from './styles';

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

    const browserList = constructMatrix(
      queryType,
      browserQuery,
      incQuery,
      excQuery
    ).browsers;

    const desktopBrowserCards = browserList.map((browser, i) => {
      if (browser.platform === platform.DESKTOP) {
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
      }
    });

    const mobileBrowserCards = browserList.map((browser, i) => {
      if (browser.platform === platform.MOBILE) {
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
      }
    });

    return (
      <Row
        style={{
          marginTop: scaffolding.gutterLg
        }}
      >
        <Col xs={12} sm={12} md={12} lg={6}>
          <TitleBar
            style={{ marginBottom: scaffolding.gutterLg }}
            borderColour={queryColour}
          >
            <H5>Desktop</H5>
            <Icon fill={queryColour} name="desktop" />
          </TitleBar>
          {desktopBrowserCards}
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <TitleBar
            style={{ marginBottom: scaffolding.gutterLg }}
            borderColour={queryColour}
          >
            <H5>Mobile / Other</H5>
            <Icon fill={queryColour} name="mobile" />
          </TitleBar>
          {mobileBrowserCards}
        </Col>
      </Row>
    );
  }
}
