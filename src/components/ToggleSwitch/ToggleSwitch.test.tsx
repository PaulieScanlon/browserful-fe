import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { ToggleSwitch } from './ToggleSwitch';
import { SwitchInput } from './styles';

// const onChange = (event, browser, version) => {};

const shallowDefault = props => {
  return shallow(<ToggleSwitch id="test-togggle-switch" {...props} />);
};

describe('<ToggleSwitch />', () => {
  it('renders correctly', () => {
    const wrapper = shallowDefault({});
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders as checkbox', () => {
    const wrapper = shallowDefault({});
    expect(wrapper.find(SwitchInput).props().type).toEqual('checkbox');
  });
  it('fires onChange', () => {
    const testOnChange = jest.fn();
    const wrapper = mount(
      <ToggleSwitch
        id="test-togggle-switch"
        onChange={event => testOnChange(event)}
      />
    );

    const switchInput = wrapper.find(SwitchInput);
    switchInput.simulate('change');
    expect(testOnChange).toHaveBeenCalledTimes(1);
  });
});
