import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { EditInput } from './EditInput';

const stories = storiesOf('EditInput', module);

const onChange = event => {
  action('onChange')(event.currentTarget.innerHTML);
};

const onBlur = event => {
  action('onBlur')(event.currentTarget.innerHTML);
};

stories.add(
  'default usage',
  withInfo('EditInput is an HTML span with contenteditable')(() => (
    <EditInput html="Untitled" />
  ))
);

stories.add(
  'onChange',
  withInfo('The onChange event fires when text is being entered')(() => (
    <EditInput html="Untitled" onChange={event => onChange(event)} />
  ))
);

stories.add(
  'onBlur',
  withInfo('The onBlur event fires when the EditInput loses focus')(() => (
    <EditInput html="Untitled" onBlur={event => onBlur(event)} />
  ))
);
