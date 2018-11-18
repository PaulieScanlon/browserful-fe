import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { spaceLg } from '../../theme';

import { AppBar } from './AppBar';
import { Button } from '../Button';

const stories = storiesOf('AppBar', module);

const onClick = event => {
  action('onClick')(event.currentTarget);
};

stories.add(
  'default usage',
  withInfo(
    'AppBar houses the Browserful Logo and other things... The disableLink prop disables the a `Link` which is part of `next-routes'
  )(() => <AppBar disableLink={true} />)
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
      <span style={{ marginRight: `${spaceLg}px` }}>
        <Button onClick={event => onClick(event)}>Click me</Button>
      </span>
    </AppBar>
  ))
);
