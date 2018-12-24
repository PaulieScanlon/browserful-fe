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
  'type',
  withInfo(
    'the type prop can be used so the ToggleSwitch can act as a radio input'
  )(() => <ToggleSwitch id="storybook-togggle-switch" type="radio" />)
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

stories.add(
  'children',
  withInfo('Children can be used to render label text')(() => (
    <ToggleSwitch id="storybook-togggle-switch">Label text</ToggleSwitch>
  ))
);

stories.add(
  'flexDirection',
  withInfo('flexDirection is any valid css flex-direction value')(() => (
    <ToggleSwitch flexDirection="row-reverse" id="storybook-togggle-switch">
      Label text
    </ToggleSwitch>
  ))
);

stories.add(
  'functional test',
  withInfo(
    `ToggleSwitch defaults to flex-grow 1 and justify-content space between to fill it's container and places the label and the input at either end`
  )(() => (
    <div style={{ display: 'flex', width: '200px' }}>
      <ToggleSwitch flexDirection="row-reverse" id="storybook-togggle-switch">
        Label text
      </ToggleSwitch>
    </div>
  ))
);