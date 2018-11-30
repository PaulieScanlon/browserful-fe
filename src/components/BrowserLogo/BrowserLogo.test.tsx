import * as React from 'react';
import { mount } from 'enzyme';

import { BrowserLogo } from '../BrowserLogo';

const mountDefault = props => {
  return mount(<BrowserLogo logo="chrome" />);
};

// @TODO using next-images and the require method inline makes this un-testable
describe('<BrowserLogo />', () => {
  it.skip('renders correctly', () => {
    const wrapper = mountDefault({});
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
