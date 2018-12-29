import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';
import { colours } from '../../theme';

const stories = storiesOf('Button', module);

const onClick = event => {
  action('onClick')(event.currentTarget);
};

stories.add(
  'default usage',
  withInfo('Button renders an HTML button element or type button')(() => (
    <Button>Click me</Button>
  ))
);

stories.add(
  'onClick',
  withInfo(
    'Button renders an HTML button element the onClick prop is required'
  )(() => <Button onClick={event => onClick(event)}>Click me</Button>)
);

stories.add(
  'fontColour',
  withInfo('The fontColour prop sets the color')(() => (
    <Button fontColour={colours.greyDark} backgroundColour={colours.offWhite}>
      Click me
    </Button>
  ))
);

stories.add(
  'backgroundColour',
  withInfo('The backgroundColour prop sets the background-color')(() => (
    <Button backgroundColour={colours.teal}>Click me</Button>
  ))
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
  'type',
  withInfo('The type prop accepts any HTML button type values')(() => (
    <Button type="submit" onClick={event => onClick(event)}>
      Click me
    </Button>
  ))
);

stories.add(
  'disabled',
  withInfo('The disabled prop disables the button')(() => (
    <Button disabled onClick={event => onClick(event)}>
      Click me
    </Button>
  ))
);
