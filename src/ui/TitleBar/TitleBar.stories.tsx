import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { TitleBar } from './TitleBar';

import {
  LabelTextRegular,
  LabelTextItalic,
  LabelTextBold
} from '../Typography';
import { PreTag } from '../../common/PreTag';
import { colours } from '../../theme';

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
  'filll',
  withInfo('The hill props controls the colour of the icon')(() => (
    <TitleBar
      highlightColour={colours.greyDark}
      fill={colours.pink}
      icon="bars"
      title="Lorem Ipsum"
    />
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

stories.add(
  'functional test',
  withInfo('Functional test for TitleBar and PreTag (saved in common)')(() => (
    <div>
      <TitleBar
        highlightColour={colours.greyDark}
        fill={colours.pink}
        icon="code"
        title="PostCSS"
      />
      <PreTag>
        last 5 versions, not ie 5.5, not ie 6, not ie 7, not ie 8, not ie 9
      </PreTag>
    </div>
  ))
);
