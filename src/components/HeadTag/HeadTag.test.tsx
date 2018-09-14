import * as React from 'react';
import { shallow } from 'enzyme';

import { HeadTag } from '../HeadTag';

const shallowDefault = () => {
  return shallow(<HeadTag />);
};

describe('<HeadTag />', () => {
  it('renders correctly', () => {
    const wrapper = shallowDefault();
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('has a <title>', () => {
    const wrapper = shallowDefault();
    const title = wrapper.find('title');
    expect(title.length).toEqual(1);
  });
});
