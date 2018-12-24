import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { DetailsLabel } from './DetailsLabel';

const stories = storiesOf('DetailsLabel', module);

stories.add(
  'default usage',
  withInfo(
    'DetailsLabel is used with Accordion to display stats about the browser'
  )(() => <DetailsLabel label="Chrome" />)
);

stories.add(
  'logo',
  withInfo('The logo prop extends BrowserLogo and and displays a logo')(() => (
    <DetailsLabel label="Chrome" logo="chrome" />
  ))
);

stories.add(
  'value',
  withInfo(
    'The value prop is used to display the value of versions covered. Optional suffix can be used to denote value type'
  )(() => <DetailsLabel label="Chrome" value={{ amount: 66, suffix: '%' }} />)
);

stories.add(
  'showBar',
  withInfo('The showBar prop is used visualise the value value')(() => (
    <DetailsLabel label="Chrome" value={{ amount: 66 }} showBar />
  ))
);
