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
  withInfo('...')(() => <DoughnutChart data={data} />)
);

stories.add(
  'segmentColour',
  withInfo('...')(() => (
    <DoughnutChart data={data} segmentColour={colours.teal} />
  ))
);
