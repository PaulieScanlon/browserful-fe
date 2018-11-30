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
  'percent',
  withInfo(
    'The percent prop is used to display the percent of versions covered'
  )(() => <DetailsLabel label="Chrome" percent={66} />)
);

stories.add(
  'statistic',
  withInfo(
    'The statistic prop is used to display the statistic without an added %'
  )(() => <DetailsLabel label="Chrome" statistic={66} />)
);

stories.add(
  'showBar',
  withInfo('The showBar prop is used visualise the percent value')(() => (
    <DetailsLabel label="Chrome" percent={66} showBar />
  ))
);
