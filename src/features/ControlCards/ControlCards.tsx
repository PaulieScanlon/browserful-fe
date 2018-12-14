import * as React from 'react';

import { Row, Col } from 'react-grid-system';

import { Accordion, AccordionItem } from '../../components/Accordion';
import { CompoundSlider } from '../../components/CompoundSlider';
import { config } from './config';

interface IProps {
  ui: any;
  sliderOnChange: (values: number) => void;
  accordionOnChange: (id: string, selectColour: string) => void;
}

export const ControlCards: React.SFC<IProps> = ({
  ui,
  sliderOnChange,
  accordionOnChange
}: IProps) => {
  const accordionItems = Object.keys(config).map((key, index) => {
    const item = config[key];
    return (
      <AccordionItem
        onChange={event =>
          accordionOnChange(event.currentTarget.id, item.selectColour)
        }
        key={index}
        id={item.id}
        label={item.label}
        value={{
          amount: ui[item.id],
          suffix: item.valueSuffix
        }}
        selectColour={item.selectColour}
        defaultChecked={ui.queryType === item.id ? true : false}
      >
        <CompoundSlider
          onChange={values => sliderOnChange(values[0])}
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
    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        <Accordion maxHeight="200px" type="radio" name="controls-accordion">
          {accordionItems}
        </Accordion>
      </Col>
    </Row>
  );
};
