import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { IconButton } from './';
import { IconLink } from './';
import { Icon } from '../Icon/Icon';
import { colours } from '../../theme';

const stories = storiesOf('IconButton', module);

const onClick = event => {
  action('onClick')(event.currentTarget, event.currentTarget.type);
};

stories.add(
  'as button',
  withInfo('IconButton renders an HTML button element of type submit')(() => (
    <IconButton backgroundColour={colours.offWhite}>
      <Icon name="bars" />
    </IconButton>
  ))
);

stories.add(
  'backgroundColour',
  withInfo(
    'The backgroundColour prop controls the background colour and applies to both IconButton and IconLink'
  )(() => (
    <IconButton backgroundColour={colours.pink}>
      <Icon name="bars" fill={colours.white} />
    </IconButton>
  ))
);

stories.add(
  'size:sm',
  withInfo('The size prop controls the size of the IconButton')(() => (
    <IconButton size="sm" backgroundColour={colours.pink}>
      <Icon name="bars" size="sm" fill={colours.white} />
    </IconButton>
  ))
);

stories.add(
  'size:md',
  withInfo('The size prop controls the size of the IconButton')(() => (
    <IconButton size="md" backgroundColour={colours.pink}>
      <Icon name="bars" size="md" fill={colours.white} />
    </IconButton>
  ))
);

stories.add(
  'size:lg',
  withInfo('The size prop controls the size of the IconButton')(() => (
    <IconButton size="lg" backgroundColour={colours.pink}>
      <Icon name="bars" size="lg" fill={colours.white} />
    </IconButton>
  ))
);

stories.add(
  'type',
  withInfo(
    'The type is an HTML type attribute and can be used with IconButton'
  )(() => (
    <IconButton
      type="button"
      onClick={event => onClick(event)}
      backgroundColour={colours.offWhite}
    >
      <Icon name="bars" />
    </IconButton>
  ))
);

stories.add(
  'onClick',
  withInfo(
    'onClick is an HTML onClick attribute and can be used with IconButton'
  )(() => (
    <IconButton onClick={event => onClick(event)}>
      <Icon name="bars" />
    </IconButton>
  ))
);

stories.add(
  'as link',
  withInfo('IconLink renders an HTML a element')(() => (
    <IconLink>
      <Icon name="bars" />
    </IconLink>
  ))
);

stories.add(
  'href',
  withInfo('href is an HTML href attribute and can be used with IconLink')(
    () => (
      <IconLink href="http://www.browserful.com">
        <Icon name="bars" />
      </IconLink>
    )
  )
);

stories.add(
  'target',
  withInfo(
    'target is an HTML href attribute and can be used with IconLink and href'
  )(() => (
    <IconLink href="http://www.browserful.com" target="_blank">
      <Icon name="bars" />
    </IconLink>
  ))
);

stories.add(
  'functinal test A',
  withInfo('Functional test for different background colours')(() => (
    <IconButton backgroundColour={colours.blue}>
      <Icon name="bars" fill={colours.white} />
    </IconButton>
  ))
);

stories.add(
  'functinal test B',
  withInfo('Functional test for different background colours')(() => (
    <IconButton backgroundColour={colours.teal}>
      <Icon name="bars" fill={colours.white} />
    </IconButton>
  ))
);
