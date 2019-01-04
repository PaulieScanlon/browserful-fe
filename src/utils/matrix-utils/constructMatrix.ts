import browserslist from 'browserslist';
import { browserDetails } from './browserDetails';
import { platform, overrides } from './enums';

export const constructMatrix = (
  browserQuery: string,
  comparisonArray: Array<String>,
  incQuery: Array<String>,
  excQuery: Array<String>
) => {
  const builtQuery = browserslist(`${browserQuery}`);
  // console.log(builtQuery);
  // console.log(comparisonArray);
  // console.log('incQuery: ', incQuery);
  // console.log('excQuery: ', excQuery);

  const getIsIncluded = version => version.isIncluded;

  const getOverrride = q =>
    incQuery.includes(q)
      ? overrides.IS_INCLUDED
      : false || excQuery.includes(q)
      ? overrides.IS_EXCLUDED
      : false;

  const browserObject: any = comparisonArray
    .map(result => {
      const [name, version] = result.split(' ', 2);
      return { name: name, version: version };
    })
    .reduce((browser, item) => {
      const { name, version } = item;

      let q = `${name} ${version}`;

      browser[name] = browser[name] || {
        ...browserDetails[name],
        includedVersions: 0,
        totalVersions: 0,
        expandCard: true,
        versions: []
      };

      browser[name].versions.push({
        friendlyName: browserDetails[name].friendlyName,
        query: q,
        version: version,
        isIncluded: builtQuery.includes(q),
        hasOverride: getOverrride(q),
        platform: browserDetails[name].platform
      });

      browser[name].includedVersions = browser[name].versions.filter(
        getIsIncluded
      ).length;

      browser[name].totalVersions = browser[name].versions.length
        ? browser[name].versions.length
        : 0;

      return browser;
    }, {});

  return browserObject;
};

// import browserslist from 'browserslist';
// import { browserDetails } from './browserDetails';
// import { platform } from './enums';
// import { IVersion } from './types';

// export const constructMatrix = (
//   browserQuery: string,
//   comparisonArray: Array<String>,
//   incQuery: Array<String>,
//   excQuery: Array<String>
// ) => {
//   const builtQuery = browserslist(`${browserQuery}`);

//   const versionsList: any = comparisonArray.map((browser: string) => {
//     const [name, version] = browser.split(' ', 2);
//     let concatQueryName = `${browserDetails[name].queryName} ${version}`;

//     const getOverrride = (
//       incQuery: Array<String>,
//       excQuery: Array<String>,
//       concatQueryName: string
//     ) =>
//       incQuery.includes(concatQueryName)
//         ? 'isIncluded'
//         : false || excQuery.includes(concatQueryName)
//         ? 'isExcluded'
//         : false;

//     return {
//       query: concatQueryName,
//       name: name,
//       version: version,
//       isIncluded:
//         getOverrride(incQuery, excQuery, concatQueryName) === 'isExcluded'
//           ? false
//           : builtQuery.includes(browser),
//       hasOverride: getOverrride(incQuery, excQuery, concatQueryName),
//       platform: browserDetails[name].platform
//     };
//   });

//   const namesList: any = versionsList.reduce(
//     (acc: Object, version: IVersion) => {
//       const [name] = version.name.split(' ', 2);
//       acc[name] = [].concat(acc[name] || [], {
//         ...version
//       });
//       return {
//         ...acc
//       };
//     },
//     {}
//   );

//   const browserList: any = Object.keys(namesList)
//     .map(browser => {
//       return {
//         friendlyName: browserDetails[browser].friendlyName,
//         logo: browserDetails[browser].logo,
//         platform: browserDetails[browser].platform,
//         includedVersions: namesList[browser]
//           ? namesList[browser].filter(version => version.isIncluded === true)
//               .length
//           : 0,
//         totalVersions: namesList[browser] ? namesList[browser].length : 0,
//         expandCard: true,
//         versions: namesList[browser]
//       };
//     })
//     .reduce(
//       (acc, browser) =>
//         Object.assign(acc, {
//           [browser.platform]: (acc[browser.platform] || []).concat({
//             ...browser
//           })
//         }),
//       {}
//     );

//   const getTotals = (platform: string, filterType: string) => {
//     const methods = {
//       noFilter: () => version => version,
//       includedFilter: () => version => version.isIncluded,
//       excludedFilter: () => version => !version.isIncluded
//     };

//     return browserList[platform]
//       .reduce((browsers, ver) => browsers.concat(ver.versions), [])
//       .filter(methods[filterType]()).length;
//   };

//   return {
//     browserList: {
//       desktop: browserList.desktop,
//       mobile: browserList.mobile
//     },
//     includedVersions: {
//       dekstop: getTotals(platform.DESKTOP, 'includedFilter'),
//       mobile: getTotals(platform.MOBILE, 'includedFilter'),
//       combined:
//         getTotals(platform.DESKTOP, 'includedFilter') +
//         getTotals(platform.MOBILE, 'includedFilter')
//     },
//     excludedVersions: {
//       dekstop: getTotals(platform.DESKTOP, 'excludedFilter'),
//       mobile: getTotals(platform.MOBILE, 'excludedFilter'),
//       combined:
//         getTotals(platform.DESKTOP, 'excludedFilter') +
//         getTotals(platform.MOBILE, 'excludedFilter')
//     },
//     totalVersions: {
//       desktop: getTotals(platform.DESKTOP, 'noFilter'),
//       mobile: getTotals(platform.MOBILE, 'noFilter'),
//       combined:
//         getTotals(platform.DESKTOP, 'noFilter') +
//         getTotals(platform.MOBILE, 'noFilter')
//     }
//   };
// };
