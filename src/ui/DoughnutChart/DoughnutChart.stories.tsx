import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { DoughnutChart } from './DoughnutChart';
import { colours } from '../../theme';

export const data = [
  {
    name: 'Group A',
    value: 120,
    fill: colours.blue,
    stroke: colours.blue
  },
  {
    name: 'Group B',
    value: 300,
    fill: colours.teal,
    stroke: colours.teal
  },
  {
    name: 'Group C',
    value: 900,
    fill: colours.offWhite,
    stroke: colours.offWhite
  }
];

const stories = storiesOf('DoughnutChart', module);

stories.add(
  'default usage',
  withInfo('The DoughnutChart is a Re-Charts Pie Chart with padding')(() => (
    <DoughnutChart data={data} />
  ))
);
