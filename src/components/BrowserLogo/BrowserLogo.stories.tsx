import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import browserslist from 'browserslist';
import { friendlyIfy } from '../../utils/friendlyIfy';

import { BrowserLogo } from './BrowserLogo';

const mockData = friendlyIfy(browserslist(['last 999 Firefox versions']));

const stories = storiesOf('BrowserLogo', module);

stories.add(
  'usage',
  withInfo('BrowserLogo is the bitmap browser logo to display')(() => (
    <BrowserLogo browser={mockData[0].logo} />
  ))
);
