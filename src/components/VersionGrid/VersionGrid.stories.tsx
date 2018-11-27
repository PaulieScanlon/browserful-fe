import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import browserslist from 'browserslist';
import { friendlyIfy } from '../../utils/friendlyIfy';

const mockData = friendlyIfy(
  browserslist(browserslist(['last 999 Chrome versions']))
);

import { VersionGrid } from './VersionGrid';

const stories = storiesOf('VersionGrid', module);

const onClick = (event, browser, version) => {
  action('onClick')(event.currentTarget, browser, version);
};

stories.add(
  'default usage',
  withInfo('VersionGrid displays versionChips and a other stuff..')(() => (
    <VersionGrid
      data={mockData[0]}
      onClick={(event, browser, version) => onClick(event, browser, version)}
    />
  ))
);
