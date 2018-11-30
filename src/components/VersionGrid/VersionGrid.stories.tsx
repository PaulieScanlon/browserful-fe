import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import browserslist from 'browserslist';
import { createMatrix } from '../../utils/createMatrix';

const mockData = createMatrix(browserslist(['last 999 versions']));

import { VersionGrid } from './VersionGrid';

const stories = storiesOf('VersionGrid', module);

const onClick = (event, browser, version) => {
  action('onClick')(event.currentTarget, browser, version);
};

stories.add(
  'default usage',
  withInfo('VersionGrid displays versionChips and a other stuff..')(() => (
    <VersionGrid
      data={mockData[9]}
      onClick={(event, browser, version) => onClick(event, browser, version)}
    />
  ))
);
