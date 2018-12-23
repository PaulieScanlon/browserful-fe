import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { CompoundSlider } from '../CompoundSlider';
import { Accordion, AccordionItem } from './Accordion';
import { colours } from '../../theme';

import { createMatrix } from '../../utils/createMatrix';

const mockData = createMatrix('last 2 versions', [], []);

const sliderOnChange = values => {
  action('sliderOnChange')(values[0]);
};

const accordionOnChange = event => {
  action('accordionOnChange')(event.currentTarget.id);
};

const stories = storiesOf('Accordion', module);

stories.add(
  'default usage',
  withInfo(
    'Accordion defaults to type radio and is useful for one-of-type selection. A unique name prop must be provided to act as the group name. The AccordionItem label prop acts a html for the label and id for the input.'
  )(() => (
    <Accordion type="radio" name="storybook-accordion">
      <AccordionItem id="item1" label="Item 1">
        child 1
      </AccordionItem>
      <AccordionItem id="item2" label="Item 2">
        child 2
      </AccordionItem>
      <AccordionItem id="item3" label="Item 3">
        child 3
      </AccordionItem>
    </Accordion>
  ))
);

stories.add(
  'onChange',
  withInfo(
    'Each Accordion Item can have an onChange handler which passes the synthetic event'
  )(() => (
    <Accordion type="radio" name="storybook-accordion">
      <AccordionItem
        onChange={event => accordionOnChange(event)}
        id="item1"
        label="Item 1"
      >
        child 1
      </AccordionItem>
      <AccordionItem
        onChange={event => accordionOnChange(event)}
        id="item1"
        label="Item 2"
      >
        child 2
      </AccordionItem>
      <AccordionItem
        onChange={event => accordionOnChange(event)}
        id="item1"
        label="Item 3"
      >
        child 3
      </AccordionItem>
    </Accordion>
  ))
);

stories.add(
  'type:checkbox',
  withInfo(`Use type="checkbox" for multiple selection`)(() => (
    <Accordion type="checkbox" name="storybook-accordion">
      <AccordionItem id="item1" label="Item 1">
        child 1
      </AccordionItem>
      <AccordionItem id="item2" label="Item 2">
        child 2
      </AccordionItem>
      <AccordionItem id="item3" label="Item 3">
        child 3
      </AccordionItem>
    </Accordion>
  ))
);

stories.add(
  'maxHeight',
  withInfo(
    'The maxHeight prop can be used for taller content, defaults to 100px'
  )(() => (
    <Accordion maxHeight="200px" type="radio" name="storybook-accordion">
      <AccordionItem id="item1" label="Item 1">
        child 1
      </AccordionItem>
      <AccordionItem id="item2" label="Item 2">
        child 2
      </AccordionItem>
      <AccordionItem id="item3" label="Item 3">
        child 3
      </AccordionItem>
    </Accordion>
  ))
);

stories.add(
  'defaultChecked',
  withInfo('The defaultChecked is used to start an item checked/selected')(
    () => (
      <Accordion type="radio" name="storybook-accordion">
        <AccordionItem defaultChecked id="item1" label="Item 1">
          child 1
        </AccordionItem>
        <AccordionItem id="item2" label="Item 2">
          child 2
        </AccordionItem>
        <AccordionItem id="item3" label="Item 3">
          child 3
        </AccordionItem>
      </Accordion>
    )
  )
);

stories.add(
  'selectColour',
  withInfo(
    'The selectColour controls the colour of the checkbox/radio background'
  )(() => (
    <Accordion type="radio" name="storybook-accordion">
      <AccordionItem selectColour={colours.pink} id="item1" label="Item 1">
        child 1
      </AccordionItem>
      <AccordionItem selectColour={colours.teal} id="item2" label="Item 2">
        child 2
      </AccordionItem>
      <AccordionItem selectColour={colours.blue} id="item3" label="Item 3">
        child 3
      </AccordionItem>
    </Accordion>
  ))
);

stories.add(
  'browser',
  withInfo(
    'The browser prop is used to display any of the predefined BrowserLogos'
  )(() => (
    <Accordion type="checkbox" name="storybook-accordion">
      <AccordionItem
        logo={mockData[0].logo}
        id={mockData[0].friendlyName}
        label={mockData[0].friendlyName}
        value={{
          amount: mockData[0].percent
        }}
      >
        child 1
      </AccordionItem>
    </Accordion>
  ))
);

stories.add(
  'CompoundSlider',
  withInfo('Displaying CompoundSlider in Accordion Item')(() => (
    <Accordion maxHeight="200px" type="checkbox" name="storybook-accordion">
      <AccordionItem defaultChecked id="item1" label="Item 1">
        <CompoundSlider
          domain={[0, 10]}
          step={1}
          values={[5]}
          tickCount={10}
          onChange={values => sliderOnChange(values)}
        />
      </AccordionItem>
    </Accordion>
  ))
);
