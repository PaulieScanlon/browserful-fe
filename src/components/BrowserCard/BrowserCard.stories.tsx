import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { coverToBrowserfulData2 } from '../../modules/browserful-data-2.0';

const data2Subset = require('../../mock-data/data-2.0.subset.json');

import { BrowserCard } from './BrowserCard';

const stories = storiesOf('BrowserCard', module);

const onClick = (event, id) => {
  action('onClick')(event.currentTarget, id);
};

stories.add(
  'default usage',
  withInfo('BrowserCard displays versionChips and a other stuff..')(() => (
    <BrowserCard
      data={coverToBrowserfulData2(data2Subset).agents.chrome}
      onClick={(event, id) => onClick(event, id)}
    />
  ))
);

stories.add(
  'defaultChecked',
  withInfo(
    'The defaultChecked is the index from the array that should start checked/selected'
  )(() => (
    <BrowserCard
      defaultChecked={true}
      data={coverToBrowserfulData2(data2Subset).agents.edge}
      onClick={(event, id) => onClick(event, id)}
    />
  ))
);
