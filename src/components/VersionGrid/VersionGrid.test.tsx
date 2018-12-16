import * as React from 'react';
import { shallow } from 'enzyme';

import browserslist from 'browserslist';
import { createMatrix } from '../../utils/createMatrix';

const mockData = createMatrix(browserslist(['last 999 Firefox versions']));

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
