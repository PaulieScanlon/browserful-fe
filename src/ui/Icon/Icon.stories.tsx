import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { paths } from './paths';
import { Icon } from './Icon';
import { DemoDiv, DemoIcon } from './styles';

import { P } from '../Typography';
import { colours } from '../../theme';

const stories = storiesOf('Icon', module);

const all = Object.keys(paths).map((icon, i) => (
  <DemoDiv key={parseInt(i.toString(), 10)}>
    <DemoIcon>
      <Icon name={icon} size="lg" />
    </DemoIcon>
    <P fontColour={colours.greyLight} fontAlign="center">
      {icon}
    </P>
  </DemoDiv>
));

stories.add('all', () => <div>{all}</div>);

stories.add(
  'usage',
  withInfo(
    'Icon paths have been taken from svgs found here: https://material.io/tools/icons/?style=baseline'
  )(() => <Icon name="error" />)
);

stories.add(
  'size:sm',
  withInfo('The size prop controls the size of the icon')(() => (
    <Icon name="error" size="sm" />
  ))
);

stories.add(
  'size:md',
  withInfo('The size prop controls the size of the icon')(() => (
    <Icon name="error" size="md" />
  ))
);

stories.add(
  'size:lg',
  withInfo('The size prop controls the size of the icon')(() => (
    <Icon name="error" size="lg" />
  ))
);

stories.add(
  'size:xl',
  withInfo('The size prop controls the size of the icon')(() => (
    <Icon name="error" size="xl" />
  ))
);

stories.add(
  'fill',
  withInfo('The fill prop controls the colour of the icon ')(() => (
    <Icon name="error" fill={colours.pink} />
  ))
);
