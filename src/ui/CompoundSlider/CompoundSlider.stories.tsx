import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { CompoundSlider } from './CompoundSlider';
import { colours } from '../../theme';

const stories = storiesOf('CompoundSlider', module);

const onChange = values => {
  action('onChange')(values[0]);
};

const onUpdate = values => {
  action('onUpdate')(values[0]);
};

stories.add(
  'default usage',
  withInfo(
    'The domain is the range from min to max, The steps are the  numerical ticks between the min and max. The values are the default starting point or points'
  )(() => (
    <CompoundSlider domain={[0, 10]} step={1} values={[5]} tickCount={10} />
  ))
);

stories.add(
  'sliderColour',
  withInfo('The sliderColour prop controls the handle and track colour')(() => (
    <CompoundSlider
      sliderColour={colours.teal}
      domain={[0, 10]}
      step={1}
      values={[5]}
      tickCount={10}
    />
  ))
);

stories.add(
  'reversed',
  withInfo('The reversed prop reverses the domain')(() => (
    <CompoundSlider
      reversed
      domain={[0, 10]}
      step={1}
      values={[5]}
      tickCount={10}
    />
  ))
);

stories.add(
  'showHandleValue',
  withInfo('The showHandleValue prop displays the slider value as you drag')(
    () => (
      <CompoundSlider
        showHandleValue
        domain={[0, 10]}
        step={1}
        values={[5]}
        tickCount={10}
      />
    )
  )
);

stories.add(
  'values',
  withInfo(
    'The values prop allows for multipel handles starting at multiple points along the domain'
  )(() => (
    <CompoundSlider
      domain={[0, 2]}
      step={0.1}
      values={[0.1, 0.5, 1]}
      tickCount={15}
    />
  ))
);

stories.add(
  'mode',
  withInfo(
    'The mode prop allows for more conrols over multiple handles, options are 1, 2, 3'
  )(() => (
    <CompoundSlider
      mode={2}
      domain={[0, 2]}
      step={0.1}
      values={[0.6, 1.4]}
      tickCount={15}
    />
  ))
);

stories.add(
  'onChange',
  withInfo(
    'Function triggered when the value of the slider has changed. This will recieve changes at the end of a slide as well as changes from clicks on rails and tracks. Receives values.'
  )(() => (
    <CompoundSlider
      onChange={values => onChange(values)}
      domain={[0, 10]}
      step={1}
      values={[5]}
      tickCount={10}
    />
  ))
);

stories.add(
  'onUpdate',
  withInfo(
    'Function called with the values at each update (caution: high-volume updates when dragging). Receives values.'
  )(() => (
    <CompoundSlider
      onUpdate={values => onUpdate(values)}
      domain={[0, 10]}
      step={1}
      values={[5]}
      tickCount={10}
    />
  ))
);

stories.add(
  'functional test',
  withInfo('Year released needs to kind work the other way round')(() => (
    <CompoundSlider
      reversed
      domain={[2009, 2019]}
      step={1}
      values={[2015]}
      tickCount={8}
    />
  ))
);
