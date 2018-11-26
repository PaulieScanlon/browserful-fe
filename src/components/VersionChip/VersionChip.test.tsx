import * as React from 'react';
import { shallow } from 'enzyme';

import { VersionChip } from './VersionChip';
import { VersionInput } from './styles';

const onChange = (event, browser, version) => {};

const shallowDefault = props => {
  return shallow(
    <VersionChip
      browser="Chrome"
      version={1}
      onChange={(event, browser, version) => onChange(event, browser, version)}
      {...props}
    />
  );
};

describe('<VersionChip />', () => {
  it('renders correctly', () => {
    const wrapper = shallowDefault({});
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders as checkbox', () => {
    const wrapper = shallowDefault({});
    expect(wrapper.find(VersionInput).props().type).toEqual('checkbox');
  });
});
