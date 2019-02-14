import * as React from 'react';
import { Col } from 'react-grid-system';

import { IProps } from '../types';

import { Accordion, AccordionItem } from '../../../ui/Accordion';
import { DetailsLabel } from '../../../ui/DetailsLabel';
import { LabelTextBold } from '../../../ui/Typography';
import { CompoundSlider } from '../../../ui/CompoundSlider';

import { config } from '../config/sliderControls.config';
import { scaffolding, colours } from '../../../theme';

export const SliderControls: React.SFC<IProps> = ({
  slidervValues,
  handleAccordionChange,
  handleSliderChange
}: IProps) => {
  const accordions = Object.keys(config).map((item: any, index: number) => {
    const accordionName = config[item];

    return (
      <Col key={index} xs={12} sm={12} md={12} lg={4}>
        <Accordion
          maxHeight="200px"
          type="checkbox"
          name={`slider-${config[item]}`}
        >
          <AccordionItem
            id={accordionName.id}
            defaultChecked={slidervValues[item].checked}
            backgroundColour={colours.offWhite}
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
              onChange={values =>
                handleSliderChange(accordionName.id, values[0])
              }
            />
          </AccordionItem>
        </Accordion>
        <div style={{ height: scaffolding.gutterLg }} />
      </Col>
    );
  });

  return <React.Fragment>{accordions}</React.Fragment>;
};
