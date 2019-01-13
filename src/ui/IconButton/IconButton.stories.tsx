import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import { action } from '@storybook/addon-actions';

import { IconButton } from './';
import { Icon } from '../Icon/Icon';
// import { colours } from '../../theme';

const stories = storiesOf('IconButton', module);

// const onClick = event => {
//   action('onClick')(event.currentTarget, event.currentTarget.type);
// };

stories.add(
  'default usage',
  withInfo('IconButton renders an HTML button element of type button')(() => (
    <IconButton>
      <Icon name="bars" />
    </IconButton>
  ))
);

// stories.add(
//   'onClick',
//   withInfo('The onClick prop handles the buttons onClick event')(() => (
//     <IconButton onClick={event => onClick(event)} name="bars" />
//   ))
// );

// stories.add(
//   'href',
//   withInfo('The href prop handles the href with optional target')(() => (
//     <IconButton href="http://www.browserful.com" target="_blank" name="bars" />
//   ))
// );
