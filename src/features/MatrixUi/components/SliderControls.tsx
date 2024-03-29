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
          maxHeight="120px"
          type="checkbox"
          name={`slider-${config[item]}`}
          theme="dark"
        >
          <AccordionItem
            id={accordionName.id}
            theme="dark"
            // defaultChecked={slidervValues[item].checked}
            defaultChecked={true}
            onChange={event => handleAccordionChange(event)}
            renderLabel={() => (
              <DetailsLabel
                label={accordionName.label}
                fontColour={colours.greyLight}
                renderStats={() =>
                  slidervValues[item].checked ? (
                    <LabelTextBold fontColour={colours.greyLight}>{`${
                      slidervValues[accordionName.id].value
                    }${accordionName.valueSuffix}`}</LabelTextBold>
                  ) : null
                }
              />
            )}
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
