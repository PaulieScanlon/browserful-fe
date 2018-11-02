import * as React from 'react';
import { shallow } from 'enzyme';

import { RangeSlider } from './RangeSlider';

const onChange = event => {};

const shallowDefault = props => {
  return shallow(
    <RangeSlider
      {...props}
      min={1970}
      max={2018}
      steps={8}
      onChange={event => onChange(event)}
    />
  );
};

describe('<RangeSlider>', () => {
  it('renders correctly', () => {
    const wrapper = shallowDefault({});
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
