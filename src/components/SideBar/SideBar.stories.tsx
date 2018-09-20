import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { SideBar } from './SideBar';

const stories = storiesOf('SideBar', module);

stories.add(
  'default usage',
  withInfo('SideBar houses the Browserful Logo and app navigation')(() => (
    <SideBar active={true} />
  ))
);
