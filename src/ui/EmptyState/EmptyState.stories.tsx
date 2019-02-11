import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { EmptyState } from './EmptyState';
// import { LabelTextItalic, LabelTextBold } from '../Typography';

const stories = storiesOf('EmptyState', module);

stories.add(
  'usage',
  withInfo(
    'EmptyState is used to display empty pages or states in the application. A main message is required'
  )(() => <EmptyState mainMessage="This is the main message" />)
);

stories.add(
  'subMessage',
  withInfo('The subMessage prop is used to display an optional sub message')(
    () => (
      <EmptyState
        mainMessage="This is the main message"
        subMessage="This is the sub message! 👻"
      />
    )
  )
);
