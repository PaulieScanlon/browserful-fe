import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { InputLabel } from './';
import { InputText } from '../InputText';

const stories = storiesOf('InputLabel', module);

stories.add(
  'default usage',
  withInfo('InputLabel can be used to wrap InputText and ...')(() => (
    <InputLabel>
      Label
      <InputText />
    </InputLabel>
  ))
);
