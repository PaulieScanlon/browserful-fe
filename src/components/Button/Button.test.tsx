import * as React from 'react';
import { shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';
expect.extend(createMatchers(emotion));

import { colours } from '../../theme';

import { Button } from './Button';

const onClick = event => {};

const shallowDefault = props => {
  return shallow(<Button {...props} onClick={event => onClick(event)} />);
};

describe('<Button />', () => {
  it('renders correctly', () => {
    const wrapper = shallowDefault({});
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('calls function onClick', () => {
    const testOnClick = jest.fn();
    const wrapper = shallow(<Button onClick={event => testOnClick(event)} />);
    wrapper.simulate('click');
    expect(testOnClick).toHaveBeenCalledTimes(1);
  });
  it('has correct styles for backgroundColor', () => {
    const wrapper = shallowDefault({ backgroundColour: colours.teal });
    expect(wrapper).toHaveStyleRule('background-color', `${colours.teal}`);
  });
  it('has correct styles for fontColour', () => {
    const wrapper = shallowDefault({ fontColour: colours.greyMid });
    expect(wrapper).toHaveStyleRule('color', `${colours.greyMid}`);
  });
});
