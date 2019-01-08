import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { DescriptionList, DescriptionTerm, DescriptionDescription } from './';
import { colours } from '../../theme';

const stories = storiesOf('DescriptionList', module);

stories.add(
  'default usage',
  withInfo('DescriptionList renders an HTML Description List')(() => (
    <DescriptionList>
      <DescriptionTerm>Lorem Ipsum</DescriptionTerm>
      <DescriptionDescription>Dolor sit</DescriptionDescription>
    </DescriptionList>
  ))
);

stories.add(
  'bulletColour',
  withInfo('The bulletColour prop controls the colour of the bullet')(() => (
    <DescriptionList>
      <DescriptionTerm bulletColour={colours.teal}>Lorem Ipsum</DescriptionTerm>
      <DescriptionDescription>Dolor sit</DescriptionDescription>
    </DescriptionList>
  ))
);
