import browserslist from 'browserslist';
import { constructMatrix } from './constructMatrix';

const incQuery = ['safari 12', 'samsung 7.2'];
const excQuery = ['safari 11.1', 'samsung 6.2'];

const typeATest = browserslist(
  'last 4 chrome versions, last 4 safari versions, last 4 samsung versions, last 4 operamobile versions'
);

describe('constructMatrix', () => {
  it('returns the correct browserObject shape : typeATest', () => {
    // const browserQuery = 'last 1 Safari versions, last 1 Samsung versions';
    const browserQuery =
      'last 1 chrome versions, last 3 safari versions, last 1 samsung versions, last 2 operamobile versions';
    const matrix = constructMatrix(browserQuery, typeATest, incQuery, excQuery);

    console.log(JSON.stringify(matrix, null, 2));

    // expect(matrix).toMatchSnapshot();
    // expect(matrix.includedVersions.dekstop).toEqual(1);
    // expect(matrix.includedVersions.mobile).toEqual(1);
    // expect(matrix.includedVersions.combined).toEqual(2);

    // console.log(JSON.stringify(matrix, null, 2));
  });
  // it('returns correct browser object shape', () => {

  //   const browserQuery = 'last 5 versions';
  //   const matrix = constructMatrix(
  //     browserQuery,
  //     typeATest,
  //     incQuery,
  //     excQuery
  //   );

  //   const browserObject = matrix.browserList.desktop;
  //   expect(matrix).toMatchSnapshot();
  //   expect(browserObject.friendlyName).toBeDefined();
  //   expect(browserObject.logo).toBeDefined();
  //   expect(browserObject.platform).toBeDefined();
  //   expect(browserObject.includedVersions).toBeDefined();
  //   expect(browserObject.totalVersions).toBeDefined();
  //   expect(browserObject.expandCard).toBeDefined();
  //   expect(Array.isArray(browserObject.versions)).toBe(true);
  // });
  // it('returns correct version object shape', () => {

  //   const browserQuery = 'last 5 versions';
  //   const matrix = constructMatrix(
  //     browserQuery,
  //     typeATest,
  //     incQuery,
  //     excQuery
  //   );

  //   const versionsObject = matrix.browserList.desktop[2].versions[0];
  //   expect(matrix).toMatchSnapshot();
  //   expect(versionsObject.query).toBeDefined();
  //   expect(versionsObject.name).toBeDefined();
  //   expect(versionsObject.version).toBeDefined();
  //   expect(versionsObject.isIncluded).toBeDefined();
  //   expect(versionsObject.hasOverride).toBeDefined();
  //   expect(versionsObject.platform).toBeDefined();
  // });
});
