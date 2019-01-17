import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Versatile } from './Versatile';

import { Icon } from '../Icon/Icon';

import { colours } from '../../theme';
import {
  LabelTextRegular,
  LabelTextItalic,
  LabelTextBold
} from '../Typography';

const stories = storiesOf('Versatile', module);

stories.add(
  'default usage',
  withInfo(
    'Versatile can be used to house a number of UI elements in a bullet list'
  )(() => (
    <Versatile
      renderContent={() => [
        <LabelTextRegular key="title">Some title text</LabelTextRegular>,
        <LabelTextItalic key="description">Some description</LabelTextItalic>
      ]}
    />
  ))
);

stories.add(
  'bulletColour',
  withInfo('The bulletColour controls the colour of the bullet')(() => (
    <Versatile
      bulletColour={colours.teal}
      renderContent={() => [
        <LabelTextRegular key="title">Some title text</LabelTextRegular>,
        <LabelTextItalic key="description">Some description</LabelTextItalic>
      ]}
    />
  ))
);

stories.add(
  'tilePadding',
  withInfo('The tilePadding prop adds padding to the top of the Versatile')(
    () => (
      <Versatile
        tilePadding="30px"
        renderContent={() => [
          <LabelTextRegular key="title">Some title text</LabelTextRegular>,
          <LabelTextItalic key="description">Some description</LabelTextItalic>
        ]}
      />
    )
  )
);

stories.add(
  'renderStart',
  withInfo(
    'use renderStart to render something at the start of the list.. like an Icon'
  )(() => (
    <Versatile
      renderStart={() => <Icon name="desktop" fill={colours.pink} />}
      renderContent={() => [
        <LabelTextRegular key="title">Some title text</LabelTextRegular>,
        <LabelTextItalic key="description">Some description</LabelTextItalic>
      ]}
    />
  ))
);

stories.add(
  'renderEnd',
  withInfo(
    'use renderStart to render something at the end of the list.. like a value'
  )(() => (
    <Versatile
      renderContent={() => [
        <LabelTextRegular key="title">Some title text</LabelTextRegular>,
        <LabelTextItalic key="description">Some description</LabelTextItalic>
      ]}
      renderEnd={() => <LabelTextBold>10</LabelTextBold>}
    />
  ))
);

stories.add(
  'functional test A',
  withInfo('optional render props')(() => (
    <Versatile
      renderStart={() => <Icon name="desktop" fill={colours.pink} />}
      renderContent={() => [
        <LabelTextRegular key="title">Some title text</LabelTextRegular>,
        <LabelTextItalic key="description">Some description</LabelTextItalic>
      ]}
      renderEnd={() => <LabelTextBold>10</LabelTextBold>}
    />
  ))
);
