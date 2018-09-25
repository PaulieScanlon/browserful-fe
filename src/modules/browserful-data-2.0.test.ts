const data2Subset = require('../mock-data/data-2.0.subset.json');

import { coverToBrowserfulData2 } from './browserful-data-2.0';

const edge = coverToBrowserfulData2(data2Subset).agents.edge;

describe('browserful-data-2.0', () => {
  it(`injects new 'isExpanded' key in browser object`, () => {
    expect(edge.isExpanded).toBe(true);
  });
  it(`injects new 'totalVersions' key in browser object`, () => {
    expect(edge.totalVersions).toEqual(7);
  });
  it(`injects new is 'isIncluded' key in versions_list object`, () => {
    expect(edge.version_list[0].isIncluded).toEqual(false);
  });
  it(`injects new is 'always' key in versions_list object`, () => {
    expect(edge.version_list[0].always).toEqual(false);
  });
});
