import * as React from 'react';

import { TitleBar } from '../../../ui/TitleBar';
import { Accordion, AccordionItem } from '../../../ui/Accordion';
import { CompoundSlider } from '../../../ui/CompoundSlider';
import { queryParams } from '../../../utils/queryStrings';
import { urlSetter } from '../../../utils/urlSetter';
import { config } from '../config';
import { DetailsLabel } from '../../../ui/DetailsLabel';
import { colours } from './../../../theme';
import { LabelTextBold } from '../../../ui/Typography';

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

export class SliderControls extends React.Component<IProps, {}> {
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
