import * as React from 'react';
import { shallow } from 'enzyme';

import { CompoundSlider } from './CompoundSlider';

const onChange = event => {};

const shallowDefault = props => {
  return shallow(<CompoundSlider {...props} />);
};

describe('<CompoundSlider>', () => {
  it('renders correctly', () => {
    const wrapper = shallowDefault({});
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
