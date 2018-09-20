import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';
expect.extend(createMatchers(emotion));

import { colours } from '../../theme';

import { VersionChip } from './VersionChip';

import { ChipButton } from './styles';

const onClick = (event, id) => {};

const shallowDefault = props => {
  return shallow(
    <VersionChip
      browser="Chrome"
      version={1}
      onClick={(event, id) => onClick(event, id)}
      {...props}
    />
  );
};

const mountDefault = props => {
  return mount(
    <VersionChip
      browser="Chrome"
      version={1}
      onClick={(event, id) => onClick(event, id)}
      {...props}
    />
  );
};

describe('<VersionChip />', () => {
  it('renders correctly', () => {
    const wrapper = shallowDefault({ isIncluded: true });
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('calls function onClick', () => {
    const testOnClick = jest.fn();
    const wrapper = shallow(
      <VersionChip
        browser="Chrome"
        version={1}
        onClick={(event, id) => testOnClick(event, id)}
      />
    );
    const chipButton = wrapper.find(ChipButton);
    chipButton.simulate('click');
    expect(testOnClick).toHaveBeenCalledTimes(1);
  });
  it('has a browser prop', () => {
    const wrapper = mountDefault({});
    expect(wrapper.props().browser).toEqual('Chrome');
  });
  it('has a version prop', () => {
    const wrapper = mountDefault({});
    expect(wrapper.props().version).toEqual(1);
  });
  it('has a isIncluded:true', () => {
    const wrapper = mountDefault({ isIncluded: true });
    expect(wrapper.props().isIncluded).toBe(true);
  });
  it('has a chipButton', () => {
    const wrapper = mountDefault({});
    const chipButton = wrapper.find(ChipButton);
    expect(chipButton).toHaveLength(1);
  });
  it('has correct styles for isIncluded:true', () => {
    const wrapper = mountDefault({ isIncluded: true });
    const chipButton = wrapper.find(ChipButton);
    expect(chipButton).toHaveStyleRule(
      'background-color',
      `${colours.greenLight}`
    );
  });
  it('has correct styles for isIncluded:false', () => {
    const wrapper = mountDefault({ isIncluded: false });
    const chipButton = wrapper.find(ChipButton);
    expect(chipButton).toHaveStyleRule(
      'background-color',
      `${colours.redLight}`
    );
  });
  it('has correct border colour for isIncluded:true & always:true', () => {
    const wrapper = mountDefault({ isIncluded: true, always: true });
    const chipButton = wrapper.find(ChipButton);
    expect(chipButton).toHaveStyleRule('border-color', `${colours.green}`);
  });
  it('has correct border colour for isIncluded:false & always:true', () => {
    const wrapper = mountDefault({ isIncluded: false, always: true });
    const chipButton = wrapper.find(ChipButton);
    expect(chipButton).toHaveStyleRule('border-color', `${colours.red}`);
  });
  it('has correct border-width for always:true', () => {
    const wrapper = mountDefault({ isIncluded: true, always: true });
    const chipButton = wrapper.find(ChipButton);
    expect(chipButton).toHaveStyleRule('border-width', '2px');
  });
});
