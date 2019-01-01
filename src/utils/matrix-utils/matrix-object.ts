import { browserDetails } from '../browserDetails';

export const matrixObject = (browserslist: Array<String>) => {
  return browserslist.reduce((acc: string, br: string) => {
    const [name, version] = br.split(' ', 2);

    acc[name] = [].concat(acc[name] || [], {
      queryName: `${browserDetails[name].queryName} ${version}`
    });

    return acc;
  }, {});
};

// export const matrixObject = (
//   browserslist: Array<String>,
//   incQuery: Array<String>,
//   excQuery: Array<String>
// ) => {
//   const formattedVersions = browserslist.reduce((acc: string, br: string) => {
//     const [name, version] = br.split(' ', 2);
//     let queryConcat = `${browserDetails[name].queryName} ${version}`;

//     acc[name] = [].concat(acc[name] || [], {
//       queryName: queryConcat,
//       version: version,
//       isIncluded: false, //TODO pass in this so it works for filtered and unfiltered
//       hasOverride: incQuery.includes(queryConcat)
//         ? 'isIncluded'
//         : false || excQuery.includes(queryConcat)
//         ? 'isExcluded'
//         : false
//     });

//     return acc;
//   }, {});

//   const formattedBrowsers = Object.keys(formattedVersions).map(br => {
//     return {
//       queryName: browserDetails[br].queryName,
//       logo: browserDetails[br].logo,
//       platform: browserDetails[br].platform,
//       versions: formattedVersions[br],
//       defaultChecked: true
//     };
//   });

//   return formattedBrowsers;
// };
