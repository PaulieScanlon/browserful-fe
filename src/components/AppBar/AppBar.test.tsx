import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { AppBar } from './AppBar';
import { AppBarWrapper } from './styles';
import { BrowserfulLogo } from '../BrowserfulLogo';

const shallowDefault = props => {
  return shallow(<AppBar {...props} />);
};

describe('<AppBar />', () => {
  it('renders correctly', () => {
    const wrapper = shallowDefault({});
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('has a <AppBarWrapper>', () => {
    const wrapper = shallowDefault({});
    const appBarWrapper = wrapper.find(AppBarWrapper);
    expect(appBarWrapper).toHaveLength(1);
  });
  it('hides logo if showLogo:false', () => {
    const wrapper = shallowDefault({ showLogo: false });
    const browserfulLogo = wrapper.find(BrowserfulLogo);
    expect(browserfulLogo).toHaveLength(0);
  });
  it('renders HTML children', () => {
    const wrapper = shallow(
      <AppBar>
        <span>child</span>
      </AppBar>
    );
    expect(wrapper.children.length).toEqual(1);
  });
  it.skip('renders React child', () => {
    const wrapper = shallow(<AppBar />);
    expect(wrapper.children.length).toEqual(1);
  });
});
