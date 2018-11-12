import * as React from 'react';
import { shallow } from 'enzyme';

import { coverToBrowserfulData2 } from '../../modules/browserful-data-2.0';

const data2Subset = require('../../mock-data/data-2.0.subset.json');

import { BrowserCard } from './BrowserCard';
import { VersionChip } from '../VersionChip';

const onClick = (event, id) => {};

const shallowDefault = () => {
  return shallow(
    <BrowserCard
      data={coverToBrowserfulData2(data2Subset).agents.edge}
      onClick={(event, id) => onClick(event, id)}
    />
  );
};

describe('<BrowserCard />', () => {
  it('renders correctly', () => {
    const wrapper = shallowDefault();
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls version function on click', () => {
    const testOnOnClick = jest.fn();
    const wrapper = shallow(
      <BrowserCard
        data={coverToBrowserfulData2(data2Subset).agents.edge}
        onClick={(event, id) => testOnOnClick(event, id)}
      />
    );
    const versionChip = wrapper.find(VersionChip).at(0);
    versionChip.simulate('click');
    expect(testOnOnClick).toHaveBeenCalledTimes(1);
  });
});
