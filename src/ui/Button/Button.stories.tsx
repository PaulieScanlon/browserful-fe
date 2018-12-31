import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { Button } from './';
import { colours } from '../../theme';

const stories = storiesOf('Button', module);

const onClick = event => {
  action('onClick')(event.currentTarget, event.currentTarget.type);
};

stories.add(
  'default usage',
  withInfo('Button renders an HTML button element or type button')(() => (
    <Button>Click me</Button>
  ))
);

stories.add(
  'size:sm',
  withInfo('The size prop controls the size of the button')(() => (
    <Button size="sm">Click me</Button>
  ))
);

stories.add(
  'size:md',
  withInfo('The size prop controls the size of the button')(() => (
    <Button size="md">Click me</Button>
  ))
);

stories.add(
  'size:lg',
  withInfo('The size prop controls the size of the button')(() => (
    <Button size="lg">Click me</Button>
  ))
);

stories.add(
  'onClick',
  withInfo(
    'Button renders an HTML button and button HTML attributes are valid'
  )(() => (
    <Button type="button" onClick={event => onClick(event)}>
      Click me
    </Button>
  ))
);

stories.add(
  'type',
  withInfo(
    'Button renders an HTML button and button HTML attributes are valid'
  )(() => (
    <Button type="submit" onClick={event => onClick(event)}>
      Click me
    </Button>
  ))
);

stories.add(
  'fontColour',
  withInfo('The fontColour prop sets the color')(() => (
    <Button fontColour={colours.teal}>Click me</Button>
  ))
);

stories.add(
  'backgroundColour',
  withInfo('The backgroundColour prop sets the background-color')(() => (
    <Button backgroundColour={colours.teal}>Click me</Button>
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
