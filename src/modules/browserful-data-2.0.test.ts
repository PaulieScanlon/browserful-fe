const data2Subset = require('../mock-data/data-2.0.subset.json');

import { covertoBrowserfulData2 } from './browserful-data-2.0';

describe('browserful-data-2.0', () => {
  it(`injects new 'totalVersions' key in browser object`, () => {
    covertoBrowserfulData2(data2Subset);
    console.log(covertoBrowserfulData2(data2Subset));
  });
  it.skip(`injects new is 'isIncluded' key in versions_list object`, () => {});
  it.skip(`injects new is 'always' key in versions_list object`, () => {});
});
