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

import { IThingObject } from '../../../modules/ui/reducers/updateUi';
interface IProps {
  thingObject: IThingObject;
  updateThing: any;
}

export class SliderControls extends React.Component<IProps, {}> {
  accordionOnChange(queryType: string) {
    urlSetter(queryParams.QUERY_TYPE, queryType);
    urlSetter(queryParams.SLIDER_VALUES, this.props.thingObject[queryType]);

    this.props.updateThing({
      ...this.props.thingObject,
      [queryParams.QUERY_TYPE]: queryType,
      browserQuery: queryBuilder(
        queryType,
        this.props.thingObject[queryType],
        this.props.thingObject.incq,
        this.props.thingObject.excq
      )
    });
  }

  sliderOnChange(value: any) {
    urlSetter(queryParams.SLIDER_VALUES, value);

    this.props.updateThing({
      ...this.props.thingObject,
      [this.props.thingObject[queryParams.QUERY_TYPE]]: value,
      browserQuery: queryBuilder(
        this.props.thingObject[queryParams.QUERY_TYPE],
        value,
        this.props.thingObject.incq,
        this.props.thingObject.excq
      )
    });
  }

  render() {
    const { qt } = this.props.thingObject;

    const accordionItems = Object.keys(config).map((key, index) => {
      const accordionName = config[key];

      return (
        <AccordionItem
          onChange={event => this.accordionOnChange(event.currentTarget.id)}
          key={index}
          id={accordionName.id}
          renderLabel={() => (
            <DetailsLabel
              label={accordionName.label}
              renderStats={() => (
                <LabelTextBold>{`${this.props.thingObject[accordionName.id]}${
                  accordionName.valueSuffix
                }`}</LabelTextBold>
              )}
            />
          )}
          selectColour={accordionName.selectColour}
          backgroundColour={colours.offWhite}
          defaultChecked={qt === accordionName.id ? true : false}
        >
          <CompoundSlider
            onChange={values => this.sliderOnChange(values[0])}
            showHandleValue
            reversed={accordionName.slider.reversed}
            sliderColour={accordionName.slider.sliderColour}
            domain={accordionName.slider.domain}
            step={accordionName.slider.step}
            values={[this.props.thingObject[accordionName.id]]}
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
