import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { DescriptionList, DescriptionTerm, DescriptionDescription } from './';
import { variantTypes } from './enums';

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

stories.add(
  'variant:timeline',
  withInfo(
    `The variant prop accepts 'timeline' to add vertical lines between the bullets, defaults to bullet`
  )(() => (
    <DescriptionList variant={variantTypes.TIMELINE}>
      <DescriptionTerm>Lorem Ipsum 1</DescriptionTerm>
      <DescriptionDescription>Dolor sit 1</DescriptionDescription>
      <DescriptionTerm>Lorem Ipsum 2</DescriptionTerm>
      <DescriptionDescription>Dolor sit 1</DescriptionDescription>
      <DescriptionTerm>Lorem Ipsum 3</DescriptionTerm>
      <DescriptionDescription>Dolor sit 3</DescriptionDescription>
    </DescriptionList>
  ))
);

stories.add(
  'lastPadding',
  withInfo(
    'The lastPadding prop adds (x) padding-top to the last item in the list'
  )(() => (
    <DescriptionList lastPadding={50}>
      <DescriptionTerm>Lorem Ipsum 1</DescriptionTerm>
      <DescriptionDescription>Dolor sit 1</DescriptionDescription>
      <DescriptionTerm>Lorem Ipsum 2</DescriptionTerm>
      <DescriptionDescription>Dolor sit 2</DescriptionDescription>
      <DescriptionTerm>Lorem Ipsum 3</DescriptionTerm>
      <DescriptionDescription>Dolor sit 3</DescriptionDescription>
    </DescriptionList>
  ))
);
