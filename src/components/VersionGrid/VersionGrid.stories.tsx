import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { coverToBrowserfulData2 } from '../../modules/browserful-data-2.0';

const data2Subset = require('../../mock-data/data-2.0.subset.json');

import { VersionGrid } from './VersionGrid';

const stories = storiesOf('VersionGrid', module);

const onClick = (event, browser, version) => {
  action('onClick')(event.currentTarget, browser, version);
};

stories.add(
  'default usage',
  withInfo('VersionGrid displays versionChips and a other stuff..')(() => (
    <VersionGrid
      data={coverToBrowserfulData2(data2Subset).agents.chrome}
      onClick={(event, browser, version) => onClick(event, browser, version)}
    />
  ))
);
