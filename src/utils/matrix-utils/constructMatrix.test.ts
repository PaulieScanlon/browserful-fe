import { constructMatrix } from './constructMatrix';

import { queryTypes } from '../queryStrings';
import browserslist from 'browserslist';

const incQuery = ['Chrome 70', 'Chrome 18'];
const excQuery = ['Chrome 69', 'Chrome 68', 'Chrome 19'];

describe('constructMatrix', () => {
  it('returns browsers for LAST_VERSIONS', () => {
    const queryType = queryTypes.LAST_VERSIONS;
    const builtQuery = browserslist('last 3 Chrome versions');
    const matrix = constructMatrix(queryType, builtQuery, incQuery, excQuery);

    expect(matrix).toMatchSnapshot();
    // console.log(...matrix);
  });

  it('returns browsers for GLOBAL_USAGE', () => {
    const queryType = queryTypes.GLOBAL_USAGE;
    const builtQuery = browserslist('>= 0.1%');
    const matrix = constructMatrix(queryType, builtQuery, incQuery, excQuery);

    expect(matrix).toMatchSnapshot();
    // console.log(...matrix);
  });

  it('returns browsers for YEAR_RELEASED', () => {
    const queryType = queryTypes.YEAR_RELEASED;
    const builtQuery = browserslist('since 2018');
    const matrix = constructMatrix(queryType, builtQuery, incQuery, excQuery);

    expect(matrix).toMatchSnapshot();
    // console.log(...matrix);
  });
});
