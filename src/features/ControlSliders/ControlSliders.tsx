import * as React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateQuery, updateValue } from '../../modules/ui/actions/update_ui';

import { Row, Col } from 'react-grid-system';

import { Accordion, AccordionItem } from '../../components/Accordion';
import { CompoundSlider } from '../../components/CompoundSlider';
import { queryParams } from '../../utils/queryStrings';
import { urlSetter } from '../../utils/urlSetter';
import { config } from './config';

interface IProps {
  queryType: string;
  globalUsage: number;
  yearReleased: number;
  lastVersions: number;
  incQuery: Array<String>;
  excQuery: Array<String>;
  browserQuery: string;
  updateQuery: any;
  updateValue: any;
}

class ControlSliders extends React.Component<IProps, {}> {
  accordionOnChange(queryType: string, queryColour: string) {
    const { updateQuery } = this.props;

    urlSetter(queryParams.QUERY_TYPE, queryType);
    urlSetter(queryParams.SLIDER_VALUES, this.props[queryType]);

    updateQuery(queryType, queryColour);
  }

  sliderOnChange(value: any) {
    const { updateValue, queryType } = this.props;

    urlSetter(queryParams.SLIDER_VALUES, value);

    updateValue(queryType, value);
  }

  render() {
    const { queryType } = this.props;

    const accordionItems = Object.keys(config).map((key, index) => {
      const accordionName = config[key];
      return (
        <AccordionItem
          onChange={event =>
            this.accordionOnChange(
              event.currentTarget.id,
              accordionName.selectColour
            )
          }
          key={index}
          id={accordionName.id}
          label={accordionName.label}
          value={{
            amount: this.props[accordionName.id],
            suffix: accordionName.valueSuffix
          }}
          selectColour={accordionName.selectColour}
          defaultChecked={queryType === accordionName.id ? true : false}
        >
          <CompoundSlider
            onChange={values => this.sliderOnChange(values[0])}
            showHandleValue
            sliderColour={accordionName.slider.sliderColour}
            domain={accordionName.slider.domain}
            step={accordionName.slider.step}
            values={[this.props[accordionName.id]]}
            tickCount={accordionName.slider.tickCount}
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
  lastVersions: state.ui.lastVersions,
  incQuery: state.ui.incQuery,
  excQuery: state.ui.excQuery,
  browserQuery: state.ui.browserQuery
});

const mapDispatchToProps = dispatch => ({
  updateQuery: bindActionCreators(updateQuery, dispatch),
  updateValue: bindActionCreators(updateValue, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlSliders);
