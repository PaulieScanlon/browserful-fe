import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { ToggleSwitch } from './ToggleSwitch';
import { colours } from '../../theme';

const onChange = event => {
  action('onChange')(event.currentTarget.id);
};

const stories = storiesOf('ToggleSwitch', module);

stories.add(
  'default usage',
  withInfo(
    'ToggleSwitch renders an HTML label wrapping an input checkbox. An id is required'
  )(() => <ToggleSwitch id="storybook-togggle-switch" />)
);

stories.add(
  'onChange',
  withInfo('The onChange handler passes the synthetic event')(() => (
    <ToggleSwitch
      id="storybook-togggle-switch"
      onChange={event => onChange(event)}
    />
  ))
);

stories.add(
  'defaultChecked',
  withInfo(
    'The defaultChecked is used to start an ToggleSwtich checked/selected'
  )(() => <ToggleSwitch id="storybook-togggle-switch" defaultChecked />)
);

stories.add(
  'selectColour',
  withInfo('The selectColour controls the colour of the checkbox background')(
    () => (
      <ToggleSwitch id="storybook-togggle-switch" selectColour={colours.teal} />
    )
  )
);
