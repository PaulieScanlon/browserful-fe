import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { createMatrix } from '../../utils/createMatrix';

import { BrowserLogo } from './BrowserLogo';

const mockData = createMatrix('last 2 Firefox versions', [], []);

const stories = storiesOf('BrowserLogo', module);

stories.add(
  'usage',
  withInfo('BrowserLogo is the bitmap browser logo to display')(() => (
    <BrowserLogo logo={mockData[7].logo} />
  ))
);
