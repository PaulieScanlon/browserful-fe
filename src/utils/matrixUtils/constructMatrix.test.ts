import browserslist from 'browserslist';
import { constructMatrix } from './constructMatrix';

describe('constructMatrix', () => {
  it('matches snapshot', () => {
    const comparisonQuery = browserslist('chrome 70, chromeandroid 69');

    const matrix = constructMatrix(
      'chrome 70, chromeandroid 69',
      comparisonQuery,
      [],
      []
    );

    // console.log(JSON.stringify(matrix, null, 2));
    expect(matrix).toMatchSnapshot();
  });

  it('returns correct keys for browserList', () => {
    const comparisonQuery = browserslist('chrome 70, chromeandroid 69');

    const matrix = constructMatrix(
      'chrome 70, chromeandroid 69',
      comparisonQuery,
      [],
      []
    );

    expect(matrix.browserList).toBeDefined();
    expect(matrix.browserList.desktop).toBeDefined();
    expect(matrix.browserList.mobile).toBeDefined();
  });

  it('returns correct shape for browserObject', () => {
    const comparisonQuery = browserslist('chrome 70');

    const matrix = constructMatrix('chrome 70', comparisonQuery, [], []);

    const {
      friendlyName,
      logo,
      platform,
      totalIncluded,
      totalExcluded,
      total,
      expandCard
    } = matrix.browserList.desktop[0];

    expect(typeof friendlyName).toEqual('string');
    expect(typeof logo).toEqual('string');
    expect(typeof platform).toEqual('string');
    expect(typeof totalIncluded).toEqual('number');
    expect(typeof totalExcluded).toEqual('number');
    expect(typeof total).toEqual('number');
    expect(typeof expandCard).toEqual('boolean');
  });

  it('returns correct shape for browserObject.versions', () => {
    const comparisonQuery = browserslist('chrome 70');

    const matrix = constructMatrix('chrome 70', comparisonQuery, [], []);

    const {
      friendlyName,
      query,
      version,
      isIncluded,
      hasOverride,
      platform
    } = matrix.browserList.desktop[0].versions[0];

    expect(typeof friendlyName).toEqual('string');
    expect(typeof query).toEqual('string');
    expect(typeof version).toEqual('string');
    expect(typeof isIncluded).toEqual('boolean');
    expect(typeof hasOverride).toEqual('boolean');
    expect(typeof platform).toEqual('string');
  });

  it('returns correct values for includedList', () => {
    const comparisonQuery = browserslist('chrome 70, chromeandroid 69');

    const matrix = constructMatrix(
      'chrome 70, chromeandroid 69',
      comparisonQuery,
      [],
      []
    );

    expect(matrix.includedList).toEqual(
      expect.objectContaining({
        desktop: 1,
        mobile: 1
      })
    );
  });

  it('returns correct values for excludedList', () => {
    const comparisonQuery = browserslist('chrome 70, chrome 69');

    const matrix = constructMatrix(
      'chrome 70, chromeandroid 69',
      comparisonQuery,
      [],
      []
    );

    expect(matrix.excludedList).toEqual(
      expect.objectContaining({
        desktop: 1,
        mobile: 0
      })
    );
  });

  it('returns correct values for total', () => {
    const comparisonQuery = browserslist(
      'chrome 70, chrome 69, chrome 68, chrome 67'
    );

    const matrix = constructMatrix('chrome 70', comparisonQuery, [], []);

    expect(matrix.total).toEqual(
      expect.objectContaining({
        desktop: 4,
        mobile: 0
      })
    );
  });

  it('is correctly isIncluded if isIncluded ovverride is set', () => {
    const comparisonQuery = browserslist('chrome 70');

    const matrix = constructMatrix(
      'chrome 70',
      comparisonQuery,
      ['chrome 70'],
      []
    );

    const {
      hasOverride,
      isIncluded
    } = matrix.browserList.desktop[0].versions[0];

    expect(isIncluded).toBe(true);
    expect(hasOverride).toEqual('isIncluded');
    expect(typeof hasOverride).toEqual('string');
  });

  it('is correctly isIncluded if isExcluded ovverride is set', () => {
    const comparisonQuery = browserslist('chrome 70');

    const matrix = constructMatrix(
      'chrome 70',
      comparisonQuery,
      [],
      ['chrome 70']
    );

    const {
      hasOverride,
      isIncluded
    } = matrix.browserList.desktop[0].versions[0];

    expect(isIncluded).toBe(false);
    expect(hasOverride).toEqual('isExcluded');
    expect(typeof hasOverride).toEqual('string');
  });
});
