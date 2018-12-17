import * as React from 'react';
import { shallow } from 'enzyme';

import { createMatrix } from '../../utils/createMatrix';

const mockData = createMatrix('last 2 Firefox versions', [], []);

import { VersionGrid } from './VersionGrid';

const shallowDefault = () => {
  return shallow(<VersionGrid data={mockData[0]} />);
};

describe('<VersionGrid />', () => {
  it('renders correctly', () => {
    const wrapper = shallowDefault();
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
