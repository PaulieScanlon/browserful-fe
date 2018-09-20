import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { common, spaceLg } from '../../theme';

import { AppBar } from './AppBar';
import { VersionChip } from '../VersionChip';

const stories = storiesOf('AppBar', module);

const onClick = (event, id) => {
  action('onClick')(event.currentTarget, id);
};

stories.add(
  'default usage',
  withInfo('AppBar houses the Browserful Logo and other things...')(() => (
    <AppBar />
  ))
);

stories.add(
  'showLogo',
  withInfo('The showLogo prop controls the visibility of the Browserful logo')(
    () => <AppBar showLogo={false} />
  )
);

stories.add(
  'children: HTML',
  withInfo('Children can be HTML')(() => (
    <AppBar>
      <span style={{ marginRight: `${spaceLg}px` }}>Hi, I'm an HTML child</span>
    </AppBar>
  ))
);

stories.add(
  'children: React',
  withInfo('Children can be React components')(() => (
    <AppBar>
      <VersionChip
        browser="Chrome"
        version={1}
        onClick={(event, id) => onClick(event, id)}
      />
    </AppBar>
  ))
);
