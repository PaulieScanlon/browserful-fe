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
  'theme',
  withInfo(
    'The theme prop converts the colour theme from default light to dark'
  )(() => <ToggleSwitch id="storybook-togggle-switch" theme="dark" />)
);

stories.add(
  'children',
  withInfo('Children can be used to render label text')(() => (
    <ToggleSwitch id="storybook-togggle-switch">Label text</ToggleSwitch>
  ))
);

stories.add(
  'renderContent',
  withInfo(
    'renderContent can be used to render a sibling element with config styles for checked and unchecked'
  )(() => (
    <ToggleSwitch
      id="storybook-togggle-switch"
      renderContent={{
        config: {
          checked: {
            transition: '.2s linear',
            color: colours.pink
          },
          unchecked: {
            transition: '.2s linear',
            color: colours.greyLight
          }
        },
        component: <div>Toggle my styles</div>
      }}
    >
      Label text
    </ToggleSwitch>
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
  'justifyContent',
  withInfo('...')(() => (
    <ToggleSwitch justifyContent="space-between" id="storybook-togggle-switch">
      Label text
    </ToggleSwitch>
  ))
);

stories.add(
  'functional test',
  withInfo('Testing width with row-reverse')(() => (
    <div
      style={{
        display: 'flex',
        width: '200px',
        border: `1px solid ${colours.greyUltraLight}`
      }}
    >
      <ToggleSwitch
        justifyContent="space-between"
        flexDirection="row-reverse"
        id="storybook-togggle-switch"
        defaultChecked
      >
        Label text
      </ToggleSwitch>
    </div>
  ))
);
