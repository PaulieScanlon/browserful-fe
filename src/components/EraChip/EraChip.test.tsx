import * as React from 'react';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import { colours } from '../../theme';
// Add the custom matchers provided by 'jest-emotion'
expect.extend(createMatchers(emotion));

import { shallow, mount } from 'enzyme';

import { ChipBody } from './styles';
import { EraChip } from './EraChip';

const shallowDefault = props => {
  return shallow(<EraChip era={1} {...props} />);
};

const mountDefault = props => {
  return mount(<EraChip era={1} {...props} />);
};

describe('<EraChip />', () => {
  it('renders correctly', () => {
    const wrapper = shallowDefault({ variant: 'included' });
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('has an era prop', () => {
    const wrapper = mountDefault({ variant: 'included' });
    expect(wrapper.props().era).toEqual(1);
  });
  it('has a variant prop', () => {
    const wrapper = mountDefault({ variant: 'included' });
    expect(wrapper.props().variant).toEqual('included');
  });
  it('has a chipBody', () => {
    const wrapper = shallowDefault({ variant: 'included' });
    const chipBody = wrapper.find(ChipBody);
    expect(chipBody).toHaveLength(1);
  });
  it('has correct styles for included', () => {
    const wrapper = mountDefault({ variant: 'included' });
    const chipBody = wrapper.find(ChipBody);
    expect(chipBody).toHaveStyleRule(
      'background-color',
      `${colours.greenLight}`
    );
  });
  it('has correct styles for excluded', () => {
    const wrapper = mountDefault({ variant: 'excluded' });
    const chipBody = wrapper.find(ChipBody);
    expect(chipBody).toHaveStyleRule('background-color', `${colours.redLight}`);
  });
  it('has correct border colour for included isSelected true', () => {
    const wrapper = mountDefault({ variant: 'included', isSelected: true });
    const chipBody = wrapper.find(ChipBody);
    expect(chipBody).toHaveStyleRule('border-color', `${colours.green}`);
  });
  it('has correct border colour for excluded isSelected true', () => {
    const wrapper = mountDefault({ variant: 'excluded', isSelected: true });
    const chipBody = wrapper.find(ChipBody);
    expect(chipBody).toHaveStyleRule('border-color', `${colours.red}`);
  });
  it('has correct border-width', () => {
    const wrapper = mountDefault({ variant: 'included', isSelected: true });
    const chipBody = wrapper.find(ChipBody);
    expect(chipBody).toHaveStyleRule('border-width', '2px');
  });
});
