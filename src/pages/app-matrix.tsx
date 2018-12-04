import * as React from 'react';

import browserslist from 'browserslist';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateQuery,
  updateGlobalUsage,
  updateYearReleased,
  updateLastVersions
} from '../modules/ui/actions/update_ui';
import { updateBrowserlist } from '../modules/browserlist/actions/update_browserlist';

import { HeadTag } from '../components/HeadTag';
import { Container, Row, Col } from 'react-grid-system';
import { AppBar } from '../components/AppBar';
import { SideBar } from '../components/SideBar';
import { Accordion, AccordionItem } from '../components/Accordion';
import { CompoundSlider } from '../components/CompoundSlider';

import { queryBuilder } from '../utils/queryBuilder';
import { actionBuilder } from '../utils/actionBuilder';
import { urlSetter } from '../utils/urlSetter';
import { urlGetter } from '../utils/urlGetter';

import { scaffolding } from '../theme';

import { accordionSliderConfig } from '../utils/accordionSliderConfig';

interface IProps {
  filtered: any;
  ui: any;
  updateBrowserlist: any;
  updateQuery: any;
  updateGlobalUsage: any;
  updateYearReleased: any;
  updateLastVersions: any;
}

class Matrix extends React.Component<IProps> {
  componentDidMount() {
    this.props.updateQuery(urlGetter().queryType);
    this.props[actionBuilder(urlGetter().queryType)](urlGetter().values);
  }

  accordionOnChange(queryType: string) {
    this.props.updateQuery(queryType);
    urlSetter(queryType, this.props.ui[queryType]);
  }

  sliderOnChange(values: any) {
    this.props[actionBuilder(this.props.ui.queryType)](values);
    this.props.updateBrowserlist(
      browserslist([`${queryBuilder(this.props.ui.queryType, values)}`])
    );

    urlSetter(this.props.ui.queryType, this.props.ui[this.props.ui.queryType]);
  }

  render() {
    const { ui } = this.props;

    const accordionItems = accordionSliderConfig.map((item, index) => {
      return (
        <AccordionItem
          onChange={event => this.accordionOnChange(event.currentTarget.id)}
          key={index}
          id={item.id}
          label={item.label}
          statistic={`${ui[item.id]}${item.valueSuffix}`}
          selectColour={item.selectColour}
          defaultChecked={ui.queryType === item.id ? true : false}
        >
          <CompoundSlider
            onChange={values => this.sliderOnChange(values[0])}
            showHandleValue
            sliderColour={item.slider.sliderColour}
            domain={item.slider.domain}
            step={item.slider.step}
            values={[ui[item.id]]}
            tickCount={item.slider.tickCount}
          />
        </AccordionItem>
      );
    });

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
                <Accordion
                  maxHeight="200px"
                  type="radio"
                  name="controls-accordion"
                >
                  {accordionItems}
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
  ui: state.ui,
  filtered: state.browserlist.filtered
});

const mapDispatchToPRops = dispatch => ({
  updateQuery: bindActionCreators(updateQuery, dispatch),
  updateGlobalUsage: bindActionCreators(updateGlobalUsage, dispatch),
  updateYearReleased: bindActionCreators(updateYearReleased, dispatch),
  updateLastVersions: bindActionCreators(updateLastVersions, dispatch),
  updateBrowserlist: bindActionCreators(updateBrowserlist, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToPRops
)(Matrix);
