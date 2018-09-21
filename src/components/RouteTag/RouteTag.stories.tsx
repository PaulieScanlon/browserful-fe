import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { RouteTag } from './RouteTag';
import { Button } from '../Button';
import { BrowserfulLogo } from '../BrowserfulLogo';

const stories = storiesOf('RouteTag', module);

const onClick = event => {
  action('onClick')(event.currentTarget);
};

stories.add(
  'default usage',
  withInfo(
    'RouteTag allows navigation around the app and is a kind of an HOC for `next-routes`. It renders children. The disableLink prop disables the a `Link` which is part of `next-routes'
  )(() => (
    <RouteTag route="/" disableLink={true}>
      some link
    </RouteTag>
  ))
);

stories.add(
  'with button',
  withInfo('Render React components as children')(() => (
    <RouteTag route="/" disableLink={true}>
      <Button onClick={event => onClick(event)}>Click Me</Button>
    </RouteTag>
  ))
);

stories.add(
  'with browserfulLogo',
  withInfo('Render React components as children')(() => (
    <RouteTag route="/" disableLink={true}>
      <BrowserfulLogo />
    </RouteTag>
  ))
);
