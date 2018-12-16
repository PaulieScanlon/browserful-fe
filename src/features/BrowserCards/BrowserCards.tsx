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
import { VersionGrid } from '../../components/VersionGrid';
import { H4 } from '../../typography';
import { platform } from '../../utils/browserDetails';

interface IProps {
  browserList: any;
  queryColour: string;
  incQuery: Array<String>;
  excQuery: Array<String>;
  updateAuto: any;
  updateIncluded: any;
  updateExcluded: any;
}
class BrowserCards extends React.Component<IProps, {}> {
  onAutoChange(browser: string, version: number | string) {
    this.props.updateAuto(
      this.props.incQuery,
      this.props.excQuery,
      `${browser} ${version}`
    );
  }

  onIncludeChange(browser: string, version: number | string) {
    this.props.updateIncluded(
      this.props.incQuery,
      this.props.excQuery,
      `${browser} ${version}`
    );
  }

  onExcludeChange(browser: string, version: number | string) {
    this.props.updateExcluded(
      this.props.incQuery,
      this.props.excQuery,
      `${browser} ${version}`
    );
  }

  render() {
    const { browserList, queryColour } = this.props;

    const desktop = browserList.map((browser, i) => {
      if (browser.platform === platform.DESKTOP) {
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
                <VersionGrid
                  data={browser}
                  onAutoChange={(browser, version) =>
                    this.onAutoChange(browser, version)
                  }
                  onIncludeChange={(browser, version) =>
                    this.onIncludeChange(browser, version)
                  }
                  onExcludeChange={(browser, version) =>
                    this.onExcludeChange(browser, version)
                  }
                />
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
                <VersionGrid
                  data={browser}
                  onAutoChange={(browser, version) =>
                    this.onAutoChange(browser, version)
                  }
                  onIncludeChange={(browser, version) =>
                    this.onIncludeChange(browser, version)
                  }
                  onExcludeChange={(browser, version) =>
                    this.onExcludeChange(browser, version)
                  }
                />
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
  browserList: state.ui.browserList,
  queryColour: state.ui.queryColour,
  incQuery: state.ui.incQuery,
  excQuery: state.ui.excQuery
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
