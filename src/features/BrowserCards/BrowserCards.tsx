import * as React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateAuto,
  updateIncluded,
  updateExcluded
} from '../../modules/ui/actions/update_ui';

import { Row, Col } from 'react-grid-system';

import { Accordion, AccordionItem } from '../../components/Accordion';
import { scaffolding, colours } from '../../theme';
import { Modal } from '../../components/Modal';
import { VersionChip } from '../../components/VersionChip';
import { OverrideSelect } from '../../components/OverrideSelect';

import { H4 } from '../../typography';

import { platform } from '../../utils/browserDetails';
import { createMatrix } from '../../utils/createMatrix';
import { queryParams } from '../../utils/queryStrings';
import { urlSetter } from '../../utils/urlSetter';
import { arrayAdd } from '../../utils/arrayAdd';
import { arrayRemove } from '../../utils/arrayRemove';

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
class BrowserCards extends React.Component<IProps, {}> {
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
    const { browserQuery, incQuery, excQuery, queryColour } = this.props;

    const browserList = createMatrix(browserQuery, incQuery, excQuery);

    const desktop = browserList.map((browser, i) => {
      if (browser.platform === platform.DESKTOP) {
        return (
          <div key={i} style={{ marginBottom: scaffolding.gutterLg }}>
            <Accordion
              maxHeight="400px"
              type="checkbox"
              name={browser.friendlyName}
              backgroundColour={colours.white}
            >
              <AccordionItem
                id={browser.friendlyName}
                logo={browser.logo}
                value={{
                  amount: browser.percent,
                  suffix: '%'
                }}
                showBar
                selectColour={queryColour}
                defaultChecked={browser.defaultChecked}
              >
                {browser.versions.map((version: any, index: number) => {
                  return (
                    <Modal
                      key={index}
                      renderTrigger={() => (
                        <VersionChip
                          version={version.id}
                          isIncluded={version.isIncluded}
                          hasOverride={version.hasOverride}
                        />
                      )}
                      renderContent={() => (
                        <OverrideSelect
                          name={browser.friendlyName}
                          friendlyName={browser.friendlyName}
                          queryName={version.queryName}
                          version={version.id}
                          logo={browser.logo}
                          hasOverride={version.hasOverride}
                          onAutoChange={queryName =>
                            this.onAutoChange(queryName)
                          }
                          onIncludeChange={queryName =>
                            this.onIncludeChange(queryName)
                          }
                          onExcludeChange={queryName =>
                            this.onExcludeChange(queryName)
                          }
                        />
                      )}
                    />
                  );
                })}
              </AccordionItem>
            </Accordion>
          </div>
        );
      }
    });

    const mobile = browserList.map((browser, i) => {
      if (browser.platform === platform.MOBILE) {
        return (
          <div key={i} style={{ marginBottom: scaffolding.gutterLg }}>
            <Accordion
              maxHeight="500px"
              type="checkbox"
              name={browser.friendlyName}
              backgroundColour={colours.white}
            >
              <AccordionItem
                id={browser.friendlyName}
                logo={browser.logo}
                value={{
                  amount: browser.percent,
                  suffix: '%'
                }}
                showBar
                selectColour={queryColour}
                defaultChecked={browser.defaultChecked}
              >
                {browser.versions.map((version: any, index: number) => {
                  return (
                    <Modal
                      key={index}
                      renderTrigger={() => (
                        <VersionChip
                          version={version.id}
                          isIncluded={version.isIncluded}
                          hasOverride={version.hasOverride}
                        />
                      )}
                      renderContent={() => (
                        <OverrideSelect
                          name={browser.friendlyName}
                          friendlyName={browser.friendlyName}
                          queryName={version.queryName}
                          version={version.id}
                          logo={browser.logo}
                          hasOverride={version.hasOverride}
                          onAutoChange={queryName =>
                            this.onAutoChange(queryName)
                          }
                          onIncludeChange={queryName =>
                            this.onIncludeChange(queryName)
                          }
                          onExcludeChange={queryName =>
                            this.onExcludeChange(queryName)
                          }
                        />
                      )}
                    />
                  );
                })}
              </AccordionItem>
            </Accordion>
          </div>
        );
      }
    });

    return (
      <Row
        style={{
          marginTop: `${scaffolding.gutterLg}`
        }}
      >
        <Col xs={12} sm={12} md={12} lg={6}>
          <H4>Desktop</H4>
          {desktop}
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <H4>Mobile</H4>
          {mobile}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  queryType: state.ui.queryType,
  globalUsage: state.ui.globalUsage,
  yearReleased: state.ui.yearReleased,
  lastVersions: state.ui.lastVersions,
  queryColour: state.ui.queryColour,
  incQuery: state.ui.incQuery,
  excQuery: state.ui.excQuery,
  browserQuery: state.ui.browserQuery
});

const mapDispatchToProps = dispatch => ({
  updateAuto: bindActionCreators(updateAuto, dispatch),
  updateIncluded: bindActionCreators(updateIncluded, dispatch),
  updateExcluded: bindActionCreators(updateExcluded, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowserCards);
