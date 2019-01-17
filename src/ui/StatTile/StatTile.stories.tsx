import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { StatTile, StatTitle, StatSummary, StatNumber } from './StatTile';
import { Icon } from '../Icon/Icon';

import { colours } from '../../theme';

const stories = storiesOf('StatTile', module);

stories.add(
  'default usage',
  withInfo(
    'StatTile is an overly complicated method for rendering four things in three columns'
  )(() => (
    <StatTile>
      <Icon name="desktop" fill={colours.pink} />
      <StatTitle>Lorem Ipsum</StatTitle>
      <StatSummary>Dolor sit</StatSummary>
      <StatNumber>3</StatNumber>
    </StatTile>
  ))
);
