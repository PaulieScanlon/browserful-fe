import { queryBuilder } from './queryBuilder';

describe('queryBuilder', () => {
  it('returns empty if there are no filters and no overrides', () => {
    const query = queryBuilder('', '', '', ['chrome 70'], ['']);

    console.log('query: ', query);
  });

  it('returns empty if there are no filters and has overrides', () => {});

  it('return correct filters when selected', () => {});
});