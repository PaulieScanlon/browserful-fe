import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { sliderData } from '../../mock-data/slider.data';

import { Accordion } from './Accordion';

const stories = storiesOf('Accordion', module);

stories.add(
  'default usage',
  withInfo(
    'Accordion defaults to type radio and is useful for one-of type selections. A unique name must be provided to act as the group name'
  )(() => <Accordion name="storybook-accordion" items={[...sliderData]} />)
);

stories.add(
  'defaultChecked',
  withInfo(
    'The defaultChecked is the index from the array that should start checked/selected'
  )(() => (
    <Accordion
      defaultChecked={1}
      name="storybook-accordion"
      items={[...sliderData]}
    />
  ))
);
