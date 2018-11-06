import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { RangeSlider } from './RangeSlider';
import { colours } from '../../theme';

const stories = storiesOf('RangeSlider', module);

const onChange = value => {
  action('onChange')('min: ', value[0], 'max: ', value[1]);
};

stories.add(
  'default usage',
  withInfo(
    'RangeSlider accepts input ranges for versions, global usage and release dates'
  )(() => (
    <RangeSlider
      min={1970}
      max={2018}
      steps={8}
      onChange={value => onChange(value)}
    />
  ))
);

stories.add(
  'sliderColour: teal',
  withInfo('RangeSlider can be themed by using the sliderColour prop')(() => (
    <RangeSlider
      min={1980}
      max={2018}
      steps={4}
      sliderColour={colours.teal}
      onChange={value => onChange(value)}
    />
  ))
);

stories.add(
  'sliderColour: blue',
  withInfo('RangeSlider can be themed by using the sliderColour prop')(() => (
    <RangeSlider
      min={1990}
      max={2020}
      steps={5}
      sliderColour={colours.blue}
      onChange={value => onChange(value)}
    />
  ))
);
