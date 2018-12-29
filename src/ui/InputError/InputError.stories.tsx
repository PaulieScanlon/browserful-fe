import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { InputLabel } from '../InputLabel';
import { InputText } from '../InputText';
import { InputError } from './';

const stories = storiesOf('InputError', module);

stories.add(
  'default usage',
  withInfo('InputError can be used to highlight errors with input fields')(
    () => (
      <InputLabel>
        Label
        <InputText />
        <InputError>Some error</InputError>
      </InputLabel>
    )
  )
);
