import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Slider } from './Slider';

const stories = storiesOf('Slider', module);

stories.add(
  'usage',
  withInfo(
    'Slider accepts input ranges for versions, global usage and release dates'
  )(() => <Slider />)
);
