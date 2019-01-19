import * as React from 'react';

import { IProps } from '../types';

import { TitleBar } from '../../../ui/TitleBar';
import { Accordion, AccordionItem } from '../../../ui/Accordion';
import { DetailsLabel } from '../../../ui/DetailsLabel';
import { LabelTextBold } from '../../../ui/Typography';
import { CompoundSlider } from '../../../ui/CompoundSlider';
import { EditInput } from '../../../ui/EditInput';

import { config } from '../config/sliderControls.config';
import { scaffolding } from '../../../theme';

export const SliderControls: React.SFC<IProps> = ({
  queryType,
  slidervValues,
  matrixName,
  handleAccordionChange,
  handleSliderChange,
  handleNameChange
}: IProps) => {
  const accordionItems = Object.keys(config).map((item: any, index: number) => {
    const accordionName = config[item];

    return (
      <AccordionItem
        key={index}
        id={accordionName.id}
        // defaultChecked={queryType === accordionName.id ? true : false}
        defaultChecked
        renderLabel={() => (
          <DetailsLabel
            label={accordionName.label}
            renderStats={() => (
              <LabelTextBold>{`${slidervValues[accordionName.id].value}${
                accordionName.valueSuffix
              }`}</LabelTextBold>
            )}
          />
        )}
        onChange={event => handleAccordionChange(event)}
      >
        <CompoundSlider
          showHandleValue
          reversed={accordionName.slider.reversed}
          sliderColour={accordionName.slider.sliderColour}
          domain={accordionName.slider.domain}
          step={accordionName.slider.step}
          values={[slidervValues[accordionName.id].value]}
          tickCount={accordionName.slider.tickCount}
          onChange={values => handleSliderChange(accordionName.id, values[0])}
        />
      </AccordionItem>
    );
  });

  return (
    <React.Fragment>
      <TitleBar
        style={{ marginBottom: scaffolding.gutterLg }}
        renderStats={() => (
          <EditInput
            html={matrixName}
            onBlur={event => handleNameChange(event.currentTarget.innerHTML)}
          />
        )}
      />
      <Accordion maxHeight="200px" type="checkbox" name="slider-controls">
        {accordionItems}
      </Accordion>
      <div style={{ height: scaffolding.gutterLg }} />
    </React.Fragment>
  );
};
