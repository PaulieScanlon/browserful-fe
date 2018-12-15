import * as React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateQuery,
  updateValue,
  updateBrowserQuery
} from '../../modules/ui/actions/update_ui';

import { Row, Col } from 'react-grid-system';

import { Accordion, AccordionItem } from '../../components/Accordion';
import { CompoundSlider } from '../../components/CompoundSlider';
import { config } from './config';

import { urlSetter } from '../../utils/urlSetter';

interface IProps {
  queryType: string;
  globalUsage: number;
  yearReleased: number;
  lastVersions: number;
  updateQuery: any;
  updateValue: any;
  updateBrowserQuery: any;
}

class ControlCards extends React.Component<IProps, {}> {
  accordionOnChange(queryType: string, queryColour: string) {
    this.props.updateQuery(queryType, queryColour);

    urlSetter(queryType, this.props[queryType]);
  }

  sliderOnChange(value: any) {
    this.props.updateValue(this.props.queryType, value);
    this.props.updateBrowserQuery(this.props.queryType, value);

    urlSetter(this.props.queryType, value);
  }

  render() {
    const { queryType } = this.props;

    const accordionItems = Object.keys(config).map((key, index) => {
      const item = config[key];
      return (
        <AccordionItem
          onChange={event =>
            this.accordionOnChange(event.currentTarget.id, item.selectColour)
          }
          key={index}
          id={item.id}
          label={item.label}
          value={{
            amount: this.props[item.id],
            suffix: item.valueSuffix
          }}
          selectColour={item.selectColour}
          defaultChecked={queryType === item.id ? true : false}
        >
          <CompoundSlider
            onChange={values => this.sliderOnChange(values[0])}
            showHandleValue
            sliderColour={item.slider.sliderColour}
            domain={item.slider.domain}
            step={item.slider.step}
            values={[this.props[item.id]]}
            tickCount={item.slider.tickCount}
          />
        </AccordionItem>
      );
    });

    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Accordion maxHeight="200px" type="radio" name="controls-accordion">
            {accordionItems}
          </Accordion>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  queryType: state.ui.queryType,
  globalUsage: state.ui.globalUsage,
  yearReleased: state.ui.yearReleased,
  lastVersions: state.ui.lastVersions
});

const mapDispatchToProps = dispatch => ({
  updateQuery: bindActionCreators(updateQuery, dispatch),
  updateValue: bindActionCreators(updateValue, dispatch),
  updateBrowserQuery: bindActionCreators(updateBrowserQuery, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlCards);
