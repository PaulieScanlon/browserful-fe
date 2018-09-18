import * as React from 'react';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import { colours } from '../../theme';

expect.extend(createMatchers(emotion));

import { shallow, mount } from 'enzyme';

import { ChipButton } from './styles';
import { VersionChip } from './VersionChip';

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
    const wrapper = shallowDefault({ variant: 'included' });
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('calls function onClick', () => {
    const testOnClick = jest.fn();
    const wrapper = shallow(
      <VersionChip
        browser="Chrome"
        version={1}
        variant="included"
        onClick={(event, id) => testOnClick(event, id)}
      />
    );
    const chipButton = wrapper.find(ChipButton);
    chipButton.simulate('click');
    expect(testOnClick).toHaveBeenCalledTimes(1);
  });
  it('has a browser prop', () => {
    const wrapper = mountDefault({ variant: 'included' });
    expect(wrapper.props().browser).toEqual('Chrome');
  });
  it('has a version prop', () => {
    const wrapper = mountDefault({ variant: 'included' });
    expect(wrapper.props().version).toEqual(1);
  });
  it('has a variant prop', () => {
    const wrapper = mountDefault({ variant: 'included' });
    expect(wrapper.props().variant).toEqual('included');
  });
  it('has a chipButton', () => {
    const wrapper = mountDefault({ variant: 'included' });
    const chipButton = wrapper.find(ChipButton);
    expect(chipButton).toHaveLength(1);
  });
  it('has correct styles for included', () => {
    const wrapper = mountDefault({ variant: 'included' });
    const chipButton = wrapper.find(ChipButton);
    expect(chipButton).toHaveStyleRule(
      'background-color',
      `${colours.greenLight}`
    );
  });
  it('has correct styles for excluded', () => {
    const wrapper = mountDefault({ variant: 'excluded' });
    const chipButton = wrapper.find(ChipButton);
    expect(chipButton).toHaveStyleRule(
      'background-color',
      `${colours.redLight}`
    );
  });
  it('has correct border colour for included isSelected true', () => {
    const wrapper = mountDefault({ variant: 'included', isSelected: true });
    const chipButton = wrapper.find(ChipButton);
    expect(chipButton).toHaveStyleRule('border-color', `${colours.green}`);
  });
  it('has correct border colour for excluded isSelected true', () => {
    const wrapper = mountDefault({ variant: 'excluded', isSelected: true });
    const chipButton = wrapper.find(ChipButton);
    expect(chipButton).toHaveStyleRule('border-color', `${colours.red}`);
  });
  it('has correct border-width', () => {
    const wrapper = mountDefault({ variant: 'included', isSelected: true });
    const chipButton = wrapper.find(ChipButton);
    expect(chipButton).toHaveStyleRule('border-width', '2px');
  });
});
