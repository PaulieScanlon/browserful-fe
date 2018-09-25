import * as React from 'react';
import { shallow } from 'enzyme';

import { coverToBrowserfulData2 } from '../../modules/browserful-data-2.0';

const data2Subset = require('../../mock-data/data-2.0.subset.json');

import { BrowserCard } from './BrowserCard';
import { ExpandChip } from '../ExpandChip';
import { VersionChip } from '../VersionChip';

const onExpandClick = event => {};
const onVersionClick = (event, id) => {};

const shallowDefault = () => {
  return shallow(
    <BrowserCard
      data={coverToBrowserfulData2(data2Subset).agents.edge}
      onExpandClick={event => onExpandClick(event)}
      onVersionClick={(event, id) => onVersionClick(event, id)}
    />
  );
};

describe('<BrowserCard />', () => {
  it('renders correctly', () => {
    const wrapper = shallowDefault();
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('calls expand function on click', () => {
    const testOnExpandClick = jest.fn();
    const wrapper = shallow(
      <BrowserCard
        data={coverToBrowserfulData2(data2Subset).agents.edge}
        onExpandClick={event => testOnExpandClick(event)}
      />
    );
    const expandChip = wrapper.find(ExpandChip);
    expandChip.simulate('click');
    expect(testOnExpandClick).toHaveBeenCalledTimes(1);
  });
  it('calls version function on click', () => {
    const testVersionOnClick = jest.fn();
    const wrapper = shallow(
      <BrowserCard
        data={coverToBrowserfulData2(data2Subset).agents.edge}
        onVersionClick={(event, id) => testVersionOnClick(event, id)}
      />
    );
    const versionChip = wrapper.find(VersionChip).at(0);
    versionChip.simulate('click');
    expect(testVersionOnClick).toHaveBeenCalledTimes(1);
  });
});
