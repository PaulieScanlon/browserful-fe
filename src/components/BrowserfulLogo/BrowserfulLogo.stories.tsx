import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { BrowserfulLogo } from './BrowserfulLogo';
import { colours } from '../../theme';

const stories = storiesOf('BrowserfulLogo', module);

stories.add(
  'default usage',
  withInfo('The default fontColour is greyMid and logoColour is pink')(() => (
    <BrowserfulLogo />
  ))
);

stories.add(
  'text',
  withInfo(
    'The text prop can be used to display text instead of the Browserful text'
  )(() => <BrowserfulLogo text="Sign up" />)
);

stories.add(
  'showText',
  withInfo('The showText prop controls the visibility of the Browserful text')(
    () => <BrowserfulLogo showText={false} />
  )
);

stories.add(
  'logoColour',
  withInfo('The logoColour controls the colour of the Browserful logo')(() => (
    <BrowserfulLogo logoColour={colours.teal} />
  ))
);

stories.add(
  'fontColour',
  withInfo('The fontColour prop controls the colour of the Browserful text')(
    () => <BrowserfulLogo fontColour={colours.greyLight} />
  )
);
