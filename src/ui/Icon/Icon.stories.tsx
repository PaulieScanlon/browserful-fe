import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Icon } from './Icon';
import { colours } from '../../theme';

const stories = storiesOf('Icon', module);

stories.add(
  'usage',
  withInfo(
    'Icon paths have been taken from svgs found here: https://material.io/tools/icons/?style=baseline '
  )(() => <Icon name="mobile" />)
);

stories.add(
  'size:lg',
  withInfo('The size prop controls the size of the icon')(() => (
    <Icon name="mobile" size="lg" />
  ))
);

stories.add(
  'fill',
  withInfo('The fill prop controls the colour of the icon ')(() => (
    <Icon name="mobile" fill={colours.pink} />
  ))
);
