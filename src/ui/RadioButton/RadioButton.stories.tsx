import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { RadioButton } from './RadioButton';
import { colours } from '../../theme';

const onChange = event => {
  action('onChange')(event.currentTarget.id);
};

const stories = storiesOf('RadioButton', module);

stories.add(
  'default usage',
  withInfo(
    'RadioButton renders an HTML label wrapping an input checkbox. An id is required'
  )(() => <RadioButton id="storybook-radio-button" />)
);

stories.add(
  'onChange',
  withInfo('The onChange handler passes the synthetic event')(() => (
    <RadioButton
      id="storybook-radio-button"
      onChange={event => onChange(event)}
    />
  ))
);

stories.add(
  'defaultChecked',
  withInfo(
    'The defaultChecked is used to start an RadioButton checked/selected'
  )(() => <RadioButton id="storybook-radio-button" defaultChecked />)
);

stories.add(
  'selectColour',
  withInfo('The selectColour controls the colour of the checkbox background')(
    () => (
      <RadioButton id="storybook-radio-button" selectColour={colours.teal} />
    )
  )
);

stories.add(
  'children',
  withInfo('Children can be used to render label text')(() => (
    <RadioButton id="storybook-radio-button">Label text</RadioButton>
  ))
);

stories.add(
  'flexDirection',
  withInfo('flexDirection is any valid css flex-direction value')(() => (
    <RadioButton flexDirection="row-reverse" id="storybook-radio-button">
      Label text
    </RadioButton>
  ))
);

stories.add(
  'functional test',
  withInfo(
    `ToggleSwitch defaults to flex-grow 1 and justify-content space between to fill it's container and places the label and the input at either end`
  )(() => (
    <div style={{ display: 'flex', width: '200px' }}>
      <RadioButton flexDirection="row-reverse" id="storybook-radio-button">
        Label text
      </RadioButton>
    </div>
  ))
);
