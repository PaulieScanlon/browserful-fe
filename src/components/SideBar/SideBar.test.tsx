import * as React from 'react';
import { shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';
expect.extend(createMatchers(emotion));

import { SideBar } from './SideBar';
import {
  SideBarWrapper,
  SideBarNav,
  SideBarHeader,
  SideBarContent
} from './styles';
import { common } from '../../theme';

const shallowDefault = props => {
  return shallow(<SideBar {...props} />);
};

describe('<SideBar />', () => {
  it('renders correctly', () => {
    const wrapper = shallowDefault({});
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('it has a <SideBarWrapper />', () => {
    const wrapper = shallowDefault({});
    const sideBarWrapper = wrapper.find(SideBarWrapper);
    expect(sideBarWrapper).toHaveLength(1);
  });
  it('it has a <SideBarNav />', () => {
    const wrapper = shallowDefault({});
    const sideBarNav = wrapper.find(SideBarNav);
    expect(sideBarNav).toHaveLength(1);
  });
  it('it has a <SideBarHeader />', () => {
    const wrapper = shallowDefault({});
    const sideBarHeader = wrapper.find(SideBarHeader);
    expect(sideBarHeader).toHaveLength(1);
  });
  it('it has a <SideBarContent />', () => {
    const wrapper = shallowDefault({});
    const sideBarContent = wrapper.find(SideBarContent);
    expect(sideBarContent).toHaveLength(1);
  });
  it('renders children', () => {
    const wrapper = shallow(
      <SideBar>
        <div />
      </SideBar>
    );
    expect(wrapper.children.length).toEqual(1);
  });
  it('sets -px marginLeft if active:false', () => {
    const wrapper = shallowDefault({ active: false });
    const sideBarNav = wrapper.find(SideBarNav);
    expect(sideBarNav).toHaveStyleRule(
      'margin-left',
      `-${common.sideBar.width}`
    );
  });
});
