import { createMatrix } from './createMatrix';

const browserQuery =
  'Chrome 70, Chrome 69, Chrome 68, Chrome 67, Chrome 66, Chrome 65, Chrome 64';
const incQuery = ['Chrome 64'];
const excQuery = ['Chrome 70'];

describe('createMatrix', () => {
  it('returns a browser object with correct keys in versions', () => {
    const testMatrix = createMatrix(browserQuery, incQuery, excQuery);

    const thing = testMatrix.map(browser => {
      console.log(browser.queryName);
    });
  });
});
