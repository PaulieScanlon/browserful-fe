import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { RangeSlider } from '../RangeSlider';
import { Accordion, AccordionItem } from './Accordion';
import { colours } from '../../theme';

const onChange = value => {
  action('onChange')('min: ', value[0], 'max: ', value[1]);
};

const stories = storiesOf('Accordion', module);

stories.add(
  'default usage',
  withInfo(
    'Accordion defaults to type radio and is useful for one-of-type selection. A unique name prop must be provided to act as the group name. The AccordionItem label prop acts a html for the label and id for the input.'
  )(() => (
    <Accordion type="radio" name="storybook-accordion">
      <AccordionItem label="Item 1">child 1</AccordionItem>
      <AccordionItem label="Item 2">child 2</AccordionItem>
      <AccordionItem label="Item 3">child 3</AccordionItem>
    </Accordion>
  ))
);

stories.add(
  'type:checkbox',
  withInfo(`Use type="checkbox" for multiple selection`)(() => (
    <Accordion type="checkbox" name="storybook-accordion">
      <AccordionItem label="Item 1">child 1</AccordionItem>
      <AccordionItem label="Item 2">child 2</AccordionItem>
      <AccordionItem label="Item 3">child 3</AccordionItem>
    </Accordion>
  ))
);

stories.add(
  'defaultChecked',
  withInfo('The defaultChecked is used to start an item checked/selected')(
    () => (
      <Accordion type="radio" name="storybook-accordion">
        <AccordionItem defaultChecked label="Item 1">
          child 1
        </AccordionItem>
        <AccordionItem label="Item 2">child 2</AccordionItem>
        <AccordionItem label="Item 3">child 3</AccordionItem>
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
      <AccordionItem selectColour={colours.teal} label="Item 1">
        child 1
      </AccordionItem>
      <AccordionItem label="Item 2">child 2</AccordionItem>
      <AccordionItem selectColour={colours.blue} label="Item 3">
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
      <AccordionItem browser="Chrome" label="Item 1">
        child 1
      </AccordionItem>
    </Accordion>
  ))
);

stories.add(
  'content',
  withInfo('Content can be anything, not just text')(() => (
    <Accordion type="radio" name="storybook-accordion">
      <AccordionItem defaultChecked label="Item 1">
        <RangeSlider
          min={1970}
          max={2018}
          steps={8}
          onChange={value => onChange(value)}
        />
      </AccordionItem>
    </Accordion>
  ))
);
