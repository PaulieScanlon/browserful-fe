import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { EraChip } from '.';

const stories = storiesOf('Chip', module);

stories.add(
  'included',
  withInfo('included is green and is used when a browser era is included')(
    () => <EraChip era={72} variant="included" />
  )
);

stories.add(
  'included & isSelected',
  withInfo('isSelected adds a border')(() => (
    <EraChip era={72} variant="included" isSelected />
  ))
);

stories.add(
  'excluded',
  withInfo('excluded is red and is used when a browser era is excluded')(() => (
    <EraChip era={72} variant="excluded" />
  ))
);

stories.add(
  'excluded & isSelected',
  withInfo('isSelected adds a border')(() => (
    <EraChip era={72} variant="excluded" isSelected />
  ))
);

stories.add(
  'single digit',
  withInfo('Displays a single digit and maintains width')(() => (
    <EraChip era={1} variant="included" />
  ))
);

stories.add(
  'double digit',
  withInfo('Displays a double digit and maintains width')(() => (
    <EraChip era={10} variant="included" />
  ))
);

stories.add(
  'tripple digit',
  withInfo('Displays a tripple digit and maintains width')(() => (
    <EraChip era={100} variant="included" />
  ))
);

stories.add(
  'in a grid',
  withInfo(
    'EraChip has margin right and bottom to maintain space when used in a grid'
  )(() => (
    <div>
      <div>
        <EraChip era={1} variant="included" />
        <EraChip era={2} variant="excluded" />
        <EraChip era={3} variant="included" />
        <EraChip era={4} variant="excluded" isSelected />
      </div>
      <div>
        <EraChip era={5} variant="excluded" />
        <EraChip era={6} variant="included" />
        <EraChip era={7} variant="excluded" />
        <EraChip era={8} variant="included" isSelected />
      </div>
    </div>
  ))
);
