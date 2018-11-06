import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { RangeSlider } from '../RangeSlider';
import { Accordion } from './Accordion';
import { colours } from '../../theme';

const stories = storiesOf('Accordion', module);

const onChange = value => {
  action('onChange')('min: ', value[0], 'max: ', value[1]);
};

const sliderItems = [
  {
    title: 'By Date',
    component: () => (
      <RangeSlider
        min={1970}
        max={2018}
        steps={8}
        onChange={value => onChange(value)}
      />
    )
  },
  {
    title: 'By Usage',
    component: () => (
      <RangeSlider
        min={1}
        max={10}
        steps={1}
        sliderColour={colours.teal}
        onChange={value => onChange(value)}
      />
    )
  },
  {
    title: 'By Era',
    component: () => (
      <RangeSlider
        min={1}
        max={100}
        steps={10}
        sliderColour={colours.blue}
        onChange={value => onChange(value)}
      />
    )
  }
];

stories.add(
  'default usage',
  withInfo(
    `Accordion defaults to type radio and is useful for one-of type selection`
  )(() => <Accordion items={[...sliderItems]} />)
);

stories.add(
  'variant',
  withInfo(
    'Using the checkbox prop Accordion items stay expanded until deselected'
  )(() => <Accordion variant="checkbox" items={[...sliderItems]} />)
);
