import * as React from 'react';
import { shallow } from 'enzyme';

import browserslist from 'browserslist';
import { createMatrix } from '../../utils/createMatrix';

const mockData = createMatrix(browserslist(['last 999 Firefox versions']));

import { VersionGrid } from './VersionGrid';
import { VersionChip } from '../VersionChip';

const onClick = (event, browser, version) => {};

const shallowDefault = () => {
  return shallow(
    <VersionGrid
      data={mockData[0]}
      onClick={(event, browser, version) => onClick(event, browser, version)}
    />
  );
};

describe('<VersionGrid />', () => {
  it('renders correctly', () => {
    const wrapper = shallowDefault();
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls version function on click', () => {
    const testOnOnClick = jest.fn();
    const wrapper = shallow(
      <VersionGrid
        data={mockData[0]}
        onClick={(event, browser, version) =>
          testOnOnClick(event, browser, version)
        }
      />
    );
    const versionChip = wrapper.find(VersionChip).at(0);
    versionChip.simulate('change');
    expect(testOnOnClick).toHaveBeenCalledTimes(1);
  });
});
