import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { EditInput } from './EditInput';

const stories = storiesOf('EditInput', module);

stories.add(
  'default usage',
  withInfo('EditInput is an HTML span with contenteditable')(() => (
    <EditInput html="Untitled" />
  ))
);
