import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { DoughnutChart } from './DoughnutChart';
import { overrides } from '../../utils/matrix-utils/enums';
import { colours } from '../../theme';

const data = [
  {
    name: 'Group A',
    value: 120,
    key: overrides.IS_INCLUDED
  },
  {
    name: 'Group B',
    value: 300,
    key: overrides.IS_INCLUDED
  },
  {
    name: 'Group C',
    value: 900,
    key: overrides.IS_EXCLUDED
  }
];

const stories = storiesOf('DoughnutChart', module);

stories.add(
  'default usage',
  withInfo('The DoughnutChart is a Re-Charts Pie Chart with padding')(() => (
    <DoughnutChart data={data} />
  ))
);

stories.add(
  'segmentColour',
  withInfo('The segmentColour prop controls the svg fill colour')(() => (
    <DoughnutChart data={data} segmentColour={colours.teal} />
  ))
);

stories.add(
  'strokeColour',
  withInfo('The strokeColour prop controls the svg stroke colour')(() => (
    <DoughnutChart
      data={data}
      segmentColour={colours.white}
      strokeColour={colours.blue}
    />
  ))
);
