import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { BrowserLogo } from './BrowserLogo';

const stories = storiesOf('BrowserLogo', module);

stories.add(
  'usage',
  withInfo('BrowserLogo is the bitmap browser logo to display')(() => (
    <BrowserLogo logo="chrome" />
  ))
);
