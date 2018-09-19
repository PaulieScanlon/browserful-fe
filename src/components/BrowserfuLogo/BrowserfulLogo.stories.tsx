import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { BrowserfulLogo } from './BrowserfulLogo';

const stories = storiesOf('BrowserfulLogo', module);

stories.add(
  'usage',
  withInfo('default theme colour is pink')(() => <BrowserfulLogo />)
);

stories.add(
  'theme',
  withInfo('The theme prop can be pink | teal')(() => (
    <BrowserfulLogo theme="teal" />
  ))
);
