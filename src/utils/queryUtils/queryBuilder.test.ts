import { queryBuilder } from './queryBuilder';

describe('queryBuilder', () => {
  it.skip('returns empty if there are no filters and no overrides', () => {
    // queryBuilder(lv, gu, yr, incQuery, excQuery, excBrowser);
    // lv: {
    //   value: !!lv ? Number(lv) : null,
    //   checked: !!lv ? true : false
    // },
    const qb = queryBuilder(
      { value: 0, checked: false },
      { value: 0, checked: false },
      { value: 0, checked: false },
      [],
      [],
      []
    );
  });

  it.skip('returns empty if there are no filters and has overrides', () => {});

  it.skip('return correct filters when selected', () => {});
});
