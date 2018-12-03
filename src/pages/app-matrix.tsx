import * as React from 'react';

import changeCase from 'change-case';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateQuery,
  updateGlobalUsage,
  updateYearReleased,
  updateLastVersions
} from '../modules/ui/actions/update_ui';

import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
import { AppBar } from '../components/AppBar';
import { SideBar } from '../components/SideBar';
import { Accordion, AccordionItem } from '../components/Accordion';
import { CompoundSlider } from '../components/CompoundSlider';

import { queryBuilder } from '../utils/queryBuilder';
import { unescapeCGI } from '../utils/uri';

import { scaffolding, colours } from '../theme';

interface IProps {
  updateQuery: any;
  updateGlobalUsage: any;
  updateYearReleased: any;
  updateLastVersions: any;
  ui: any;
}

class Matrix extends React.Component<IProps> {
  componentDidMount() {
    const queryType = location.search.replace(/[\?]/g, '');
    const values = Number(
      unescapeCGI(location.hash.slice(1)).replace(/[^\d.-]/g, '')
    );

    const settings = queryBuilder(queryType, values);

    this.props.updateQuery(queryType);
    this.props[settings.action](values);
  }

  accordionOnChange(id: string) {
    this.props.updateQuery(id);
    queryBuilder(id, this.props.ui[id]);
  }

  sliderOnChange(values: any) {
    const settings = queryBuilder(this.props.ui.queryType, values);

    this.props[settings.action](values);
  }

  render() {
    const { ui } = this.props;

    return (
      <React.Fragment>
        <HeadTag />
        <AppBar showLogo={false} fixed={true} width="100%" />
        <SideBar active={true}>
          <Container
            fluid
            style={{
              margin: `${scaffolding.gutterLg} ${scaffolding.gutterSm}`
            }}
          >
            <Row>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div style={{ marginBottom: scaffolding.gutterLg }}>
                  Active Query: {ui.queryType} |{ui[ui.queryType]}
                </div>
                <Accordion
                  maxHeight="200px"
                  type="radio"
                  name="controls-accordion"
                >
                  <AccordionItem
                    defaultChecked={
                      this.props.ui.queryType === 'globalUsage' ? true : false
                    }
                    // onChange={event =>
                    //   this.props.updateQuery(event.currentTarget.id)
                    // }
                    onChange={event =>
                      this.accordionOnChange(event.currentTarget.id)
                    }
                    id={'globalUsage'}
                    label="Global Usage"
                    percent={ui.globalUsage}
                  >
                    <CompoundSlider
                      // onChange={values =>
                      //   this.props.updateGlobalUsage(values[0])
                      // }
                      onChange={values => this.sliderOnChange(values[0])}
                      showHandleValue
                      domain={[0, 1]}
                      step={0.001}
                      values={[ui.globalUsage]}
                      tickCount={14}
                    />
                  </AccordionItem>
                  <AccordionItem
                    defaultChecked={
                      this.props.ui.queryType === 'yearReleased' ? true : false
                    }
                    onChange={event =>
                      this.accordionOnChange(event.currentTarget.id)
                    }
                    // onChange={event =>
                    //   this.props.updateQuery(event.currentTarget.id)
                    // }
                    id={'yearReleased'}
                    label="Year Released"
                    statistic={ui.yearReleased}
                    selectColour={colours.teal}
                  >
                    <CompoundSlider
                      // onChange={values =>
                      //   this.props.updateYearReleased(values[0])
                      // }
                      onChange={values => this.sliderOnChange(values[0])}
                      sliderColour={colours.teal}
                      showHandleValue
                      domain={[2010, 2018]}
                      step={1}
                      values={[ui.yearReleased]}
                      tickCount={8}
                    />
                  </AccordionItem>
                  <AccordionItem
                    defaultChecked={
                      this.props.ui.queryType === 'lastVersions' ? true : false
                    }
                    // onChange={event =>
                    //   this.props.updateQuery(event.currentTarget.id)
                    // }
                    onChange={event =>
                      this.accordionOnChange(event.currentTarget.id)
                    }
                    id={'lastVersions'}
                    label="Last (x) Versions"
                    statistic={ui.lastVersions}
                    selectColour={colours.blue}
                  >
                    <CompoundSlider
                      // onChange={values =>
                      //   this.props.updateLastVersions(values[0])
                      // }
                      onChange={values => this.sliderOnChange(values[0])}
                      sliderColour={colours.blue}
                      showHandleValue
                      domain={[1, 20]}
                      step={1}
                      values={[ui.lastVersions]}
                      tickCount={20}
                    />
                  </AccordionItem>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </SideBar>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ui: state.ui
});

const mapDispatchToPRops = dispatch => ({
  updateQuery: bindActionCreators(updateQuery, dispatch),
  updateGlobalUsage: bindActionCreators(updateGlobalUsage, dispatch),
  updateYearReleased: bindActionCreators(updateYearReleased, dispatch),
  updateLastVersions: bindActionCreators(updateLastVersions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToPRops
)(Matrix);
