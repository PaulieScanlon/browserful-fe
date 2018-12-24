import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';
expect.extend(createMatchers(emotion));

import { colours } from '../../theme';

import { BrowserfulLogo } from './';

import { LogoWrapper, SvgWrapper } from './styles';
import { BrowserfulLogoText } from '../../ui/Typography';

const shallowDefault = props => {
  return shallow(<BrowserfulLogo {...props} />);
};

const mountDefault = props => {
  return mount(<BrowserfulLogo {...props} />);
};

describe('<BrowserfulLogo/>', () => {
  it('renders correctly', () => {
    const wrapper = shallowDefault({});
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('has a <LogoWrapper/>', () => {
    const wrapper = shallowDefault({});
    const logoWrapper = wrapper.find(LogoWrapper);
    expect(logoWrapper).toHaveLength(1);
  });
  it('has an <SvgWrapper/>', () => {
    const wrapper = shallowDefault({});
    const svgWrapper = wrapper.find(SvgWrapper);
    expect(svgWrapper).toHaveLength(1);
  });
  it('renders text if showText:true', () => {
    const wrapper = mountDefault({ showText: true });
    const browserfulLogoText = wrapper.find(BrowserfulLogoText);
    expect(browserfulLogoText).toHaveLength(1);
  });
  it('renders logo with correct colour with logoColour', () => {
    const wrapper = mountDefault({ logoColour: colours.teal });
    const svg = wrapper.find('svg');
    expect(wrapper.props().logoColour).toEqual(colours.teal);
    expect(svg.props().style.fill).toEqual(colours.teal);
  });
  it('renders ui/Typography with correct colour with fontColour', () => {
    const wrapper = mountDefault({
      showText: true,
      fontColour: colours.greyLight
    });
    const browserfulLogoText = wrapper.find(BrowserfulLogoText);
    expect(wrapper.props().fontColour).toEqual(colours.greyLight);
    expect(browserfulLogoText.props().fontColour).toEqual(colours.greyLight);
    expect(browserfulLogoText).toHaveStyleRule('color', `${colours.greyLight}`);
  });
});
