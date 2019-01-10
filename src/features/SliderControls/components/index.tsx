import * as React from 'react';

import { queryParams } from '../../../utils/query-utils/enums';
import { queryBuilder } from '../../../utils/query-utils/queryBuilder';
import { urlSetter } from '../../../utils/url-utils/urlSetter';

import { TitleBar } from '../../../ui/TitleBar';
import { Accordion, AccordionItem } from '../../../ui/Accordion';
import { CompoundSlider } from '../../../ui/CompoundSlider';
import { DetailsLabel } from '../../../ui/DetailsLabel';
import { LabelTextBold } from '../../../ui/Typography';
import { colours } from './../../../theme';

import { config } from '../config';

interface IProps {
  queryType: string;
  globalUsage: number;
  yearReleased: number;
  lastVersions: number;
  incQuery: Array<String>;
  excQuery: Array<String>;
  browserQuery: string;
  thingObject: Object;
  updateQuery: any;
  updateValue: any;
  updateThing: any;
}

export class SliderControls extends React.Component<IProps, {}> {
  accordionOnChange(queryType: string, queryColour: string) {
    const { updateQuery } = this.props;

    urlSetter(queryParams.QUERY_TYPE, queryType);
    urlSetter(queryParams.SLIDER_VALUES, this.props[queryType]);

    updateQuery(queryType, queryColour);

    this.props.updateThing({
      ...this.props.thingObject,
      [queryParams.QUERY_TYPE]: queryType
    });
  }

  sliderOnChange(value: any) {
    const { updateValue, queryType } = this.props;

    urlSetter(queryParams.SLIDER_VALUES, value);

    updateValue(queryType, value);

    this.props.updateThing({
      ...this.props.thingObject,
      [this.props.queryType]: value,
      browserQuery: queryBuilder(this.props.queryType, value, [''], [''])
    });
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
          renderLabel={() => (
            <DetailsLabel
              label={accordionName.label}
              renderStats={() => (
                <LabelTextBold>{`${this.props[accordionName.id]}${
                  accordionName.valueSuffix
                }`}</LabelTextBold>
              )}
            />
          )}
          selectColour={accordionName.selectColour}
          backgroundColour={colours.offWhite}
          defaultChecked={queryType === accordionName.id ? true : false}
        >
          <CompoundSlider
            onChange={values => this.sliderOnChange(values[0])}
            showHandleValue
            reversed={accordionName.slider.reversed}
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
      <React.Fragment>
        <TitleBar icon="settings" title="Settings" />
        <Accordion maxHeight="200px" type="radio" name="slider-controls">
          {accordionItems}
        </Accordion>
      </React.Fragment>
    );
  }
}
