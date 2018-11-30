import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import browserslist from 'browserslist';
import { createMatrix } from '../../utils/createMatrix';

import { BrowserLogo } from './BrowserLogo';

const mockData = createMatrix(browserslist(['last 999 Firefox versions']));

const stories = storiesOf('BrowserLogo', module);

stories.add(
  'usage',
  withInfo('BrowserLogo is the bitmap browser logo to display')(() => (
    <BrowserLogo logo={mockData[0].logo} />
  ))
);
