import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { InputText } from './';
import { InputLabel } from '../InputLabel';

const onEvent = event => {
  action('onEvent')(event.type);
};

const stories = storiesOf('InputText', module);

stories.add(
  'default usage',
  withInfo(
    'InputText is set to flex-grow but should be wrapped in a InputLabel'
  )(() => (
    <InputLabel>
      Label
      <InputText />
    </InputLabel>
  ))
);

stories.add(
  'events',
  withInfo('all html input events work as normal')(() => (
    <InputText
      onFocus={event => onEvent(event)}
      onChange={event => onEvent(event)}
      onBlur={event => onEvent(event)}
    />
  ))
);
