import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Button } from './Button';
import { colours } from '../../theme';

const stories = storiesOf('Button', module);

stories.add(
  'default usage',
  withInfo(
    'Button renders an HTML button element the onClick prop is required'
  )(() => <Button>Click me</Button>)
);

stories.add(
  'grow',
  withInfo('The grow prop sets flex-grow to 1')(() => (
    <div style={{ display: 'flex' }}>
      <Button grow>Click me</Button>
    </div>
  ))
);

stories.add(
  'backgroundColour',
  withInfo('The backgroundColour prop sets the background-color')(() => (
    <Button backgroundColour={colours.teal}>Click me</Button>
  ))
);

stories.add(
  'fontColour',
  withInfo('The fontColour prop sets the color')(() => (
    <Button fontColour={colours.greyDark} backgroundColour={colours.offWhite}>
      Click me
    </Button>
  ))
);
