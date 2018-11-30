import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { CompoundSlider } from '../CompoundSlider';
import { VersionGrid } from '../VersionGrid';
import { Accordion, AccordionItem } from './Accordion';
import { colours } from '../../theme';

import browserslist from 'browserslist';
import { createMatrix } from '../../utils/createMatrix';

const mockData = createMatrix(browserslist(['last 999 Firefox versions']));

const onChange = value => {
  action('onChange')('min: ', value[0], 'max: ', value[1]);
};

const onClick = (event, browser, version) => {
  action('onClick')(event.currentTarget, browser, version);
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
  'maxHeight',
  withInfo(
    'The maxHeight prop can be used for taller content, defaults to 100px'
  )(() => (
    <Accordion maxHeight="200px" type="radio" name="storybook-accordion">
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
      <AccordionItem logo={mockData[0].logo} label={mockData[0].friendlyName}>
        child 1
      </AccordionItem>
    </Accordion>
  ))
);

stories.add(
  'CompoundSlider',
  withInfo('Displaying CompoundSlider in Accordion Item')(() => (
    <Accordion maxHeight="200px" type="checkbox" name="storybook-accordion">
      <AccordionItem defaultChecked label="Item 1">
        <CompoundSlider domain={[0, 10]} step={1} values={[5]} tickCount={10} />
      </AccordionItem>
    </Accordion>
  ))
);

stories.add(
  'VersionGrid',
  withInfo('Displaying VersionGrid in Accordion Item')(() => (
    <Accordion
      maxHeight="500px"
      backgroundColour={colours.white}
      type="checkbox"
      name="storybook-accordion"
    >
      <AccordionItem
        defaultChecked
        logo={mockData[0].logo}
        label={mockData[0].friendlyName}
      >
        <VersionGrid
          data={mockData[0]}
          onClick={(event, browser, version) =>
            onClick(event, browser, version)
          }
        />
      </AccordionItem>
    </Accordion>
  ))
);
