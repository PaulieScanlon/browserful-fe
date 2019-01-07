import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { DetailsLabel } from './DetailsLabel';
import { LabelTextItalic, LabelTextBold } from '../Typography';

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
  'renderStats',
  withInfo('The renderStats prop ca ben used to rener label text')(() => (
    <DetailsLabel
      label="Chrome"
      renderStats={() => [
        <LabelTextBold key={'label-text-bold-a'}>3&nbsp;</LabelTextBold>,
        <LabelTextItalic key={'label-text-italic'}>of&nbsp;</LabelTextItalic>,
        <LabelTextBold key={'label-text-bold-b'}>20&nbsp;</LabelTextBold>
      ]}
    />
  ))
);
