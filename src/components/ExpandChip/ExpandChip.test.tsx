import * as React from 'react';
import { shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';
expect.extend(createMatchers(emotion));

import { ExpandChip } from './ExpandChip';

const onClick = event => {};

const shallowDefault = props => {
  return shallow(<ExpandChip {...props} onClick={event => onClick(event)} />);
};

describe('<ExpandChip>', () => {
  it('renders correctly', () => {
    const wrapper = shallowDefault({ isExpaned: true });
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('calls function onClick', () => {
    const testOnClick = jest.fn();
    const wrapper = shallow(
      <ExpandChip isExpanded={true} onClick={event => testOnClick(event)} />
    );
    wrapper.simulate('click');
    expect(testOnClick).toHaveBeenCalledTimes(1);
  });
  it('has correct styles for isExpanded:true', () => {
    const wrapper = shallowDefault({ isExpanded: true });
    expect(wrapper).toHaveStyleRule('transform', 'rotate(0deg)');
  });
  it('has correct styles for isExpanded:false', () => {
    const wrapper = shallowDefault({ isExpanded: false });
    expect(wrapper).toHaveStyleRule('transform', 'rotate(180deg)');
  });
});
