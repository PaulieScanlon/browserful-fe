import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Icon } from '../Icon';
import { InputLabel } from '../InputLabel';
import { InputText } from '../InputText';
import { InputAnnounce } from './';
import { colours } from '../../theme';

const stories = storiesOf('InputAnnounce', module);

stories.add(
  'default usage',
  withInfo(
    'InputAnnounce can be used to highlight success or errors with input fields'
  )(() => (
    <InputLabel>
      Label
      <InputText />
      <InputAnnounce>Input announce</InputAnnounce>
    </InputLabel>
  ))
);

stories.add(
  'warning',
  withInfo(
    'The variant prop can be used to denote different types of announce.'
  )(() => (
    <InputLabel>
      Label
      <InputText />
      <InputAnnounce variant="warning">warning announce</InputAnnounce>
    </InputLabel>
  ))
);

stories.add(
  'error',
  withInfo(
    'The variant prop can be used to denote different types of announce.'
  )(() => (
    <InputLabel>
      Label
      <InputText />
      <InputAnnounce variant="error">error announce</InputAnnounce>
    </InputLabel>
  ))
);

stories.add(
  'success',
  withInfo(
    'The variant prop can be used to denote different types of announce.'
  )(() => (
    <InputLabel>
      Label
      <InputText />
      <InputAnnounce variant="success">success announce</InputAnnounce>
    </InputLabel>
  ))
);

stories.add(
  'icon',
  withInfo('Use with icon no problems.')(() => (
    <InputLabel>
      Label
      <InputText />
      <InputAnnounce variant="error">
        <Icon name="error" size="sm" fill={colours.red} />
        error announce
      </InputAnnounce>
    </InputLabel>
  ))
);
