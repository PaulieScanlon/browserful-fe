import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { InputTextArea } from './';
import { InputLabel } from '../InputLabel';

const onEvent = event => {
  action('onEvent')(event.type);
};

const stories = storiesOf('InputTextArea', module);

stories.add(
  'default usage',
  withInfo(
    'InputText is set to flex-grow but should be wrapped in a InputLabel'
  )(() => (
    <InputLabel>
      Label
      <InputTextArea />
    </InputLabel>
  ))
);

stories.add(
  'events',
  withInfo('all html input events work as normal')(() => (
    <InputTextArea
      onFocus={event => onEvent(event)}
      onChange={event => onEvent(event)}
      onBlur={event => onEvent(event)}
    />
  ))
);
