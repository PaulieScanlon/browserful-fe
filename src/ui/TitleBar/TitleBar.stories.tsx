import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { TitleBar } from './TitleBar';
import { colours } from '../../theme';
import {
  LabelTextRegular,
  LabelTextItalic,
  LabelTextBold
} from '../Typography';

const stories = storiesOf('TitleBar', module);

stories.add(
  'default usage',
  withInfo(
    'TitleBar renders a panel containing an reqired icon and required title and render prop for additinal text'
  )(() => <TitleBar icon="bars" title="Lorem Ipsum" />)
);

stories.add(
  'highlightColour',
  withInfo(
    'The highlight colour determines the colour of circle which encapsulates the icon'
  )(() => (
    <TitleBar highlightColour={colours.blue} icon="bars" title="Lorem Ipsum" />
  ))
);

stories.add(
  'renderStats',
  withInfo(
    'The highlight colour determines the colour of circle which encapsulates the icon'
  )(() => (
    <TitleBar
      highlightColour={colours.blue}
      icon="bars"
      title="Lorem Ipsum"
      renderStats={() => [
        <LabelTextBold key={'label-text-bold-a'}>24&nbsp;</LabelTextBold>,
        <LabelTextItalic key={'label-text-italic'}>of&nbsp;</LabelTextItalic>,
        <LabelTextBold key={'label-text-bold-b'}>107&nbsp;</LabelTextBold>,
        <LabelTextRegular key={'label-text-regular'}>included</LabelTextRegular>
      ]}
    />
  ))
);
