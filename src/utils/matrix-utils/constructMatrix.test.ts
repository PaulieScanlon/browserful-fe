import { constructMatrix } from './constructMatrix';

import { queryTypes } from '../queryStrings';

const incQuery = ['Chrome 70', 'Chrome 69'];
const excQuery = [
  'Explorer 5.5',
  'Explorer 6',
  'Explorer 7',
  'Explorer 8',
  'Explorer 9'
];

describe('constructMatrix', () => {
  it('returns browsers for LAST_VERSIONS', () => {
    const queryType = queryTypes.LAST_VERSIONS;
    const browserQuery = 'last 5 versions';
    const matrix = constructMatrix(queryType, browserQuery, incQuery, excQuery);

    expect(matrix).toMatchSnapshot();
    // console.log(matrix);
    // console.log(...matrix.browsers);
  });

  it('returns browsers for GLOBAL_USAGE', () => {
    const queryType = queryTypes.GLOBAL_USAGE;
    const browserQuery = '>= 0.1%';
    const matrix = constructMatrix(queryType, browserQuery, incQuery, excQuery);

    expect(matrix).toMatchSnapshot();
    // console.log(matrix);
    // console.log(...matrix.browsers);
  });

  it('returns browsers for YEAR_RELEASED', () => {
    const queryType = queryTypes.YEAR_RELEASED;
    const browserQuery = 'since 2018';
    const matrix = constructMatrix(queryType, browserQuery, incQuery, excQuery);

    expect(matrix).toMatchSnapshot();
    // console.log(matrix);
    // console.log(...matrix.browsers);
  });
});
