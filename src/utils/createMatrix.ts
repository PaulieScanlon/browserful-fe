import browserslist from 'browserslist';

import { browserDetails } from './browserDetails';

const unfiltered = browserslist(['last 999 versions']).reduce((acc, br) => {
  const [name, version] = br.split(' ', 2);
  acc[name] = [].concat(acc[name] || [], {
    queryName: `${browserDetails[name].queryName} ${version}`,
    id: version,
    isIncluded: false,
    hasOverride: false
  });
  return acc;
}, {});

const getVersionsStatus = (
  filteredVersions: any,
  unfiltered: any,
  incQuery: Array<String>,
  excQuery: Array<String>
) => {
  return unfiltered.map(version => {
    return {
      ...version,
      isIncluded: filteredVersions
        ? filteredVersions.includes(version.id)
        : false,
      hasOverride: incQuery.includes(version.queryName)
        ? 'isIncluded'
        : false || excQuery.includes(version.queryName)
        ? 'isExcluded'
        : false
    };
  });
};

const getVersionsPercentage = (filteredVersions: any, unfiltered: any) => {
  if (filteredVersions) {
    const percent = Math.floor(
      (filteredVersions.length / unfiltered.length) * 100
    );
    return percent > 100 ? 100 : percent;
  }
};

export const createMatrix = (
  builtQuery: string,
  incQuery: Array<String>,
  excQuery: Array<String>
) => {
  const filteredVersions = browserslist(`${builtQuery}`).reduce((acc, br) => {
    const [name, version] = br.split(' ', 2);
    acc[name] = [].concat(acc[name] || [], version);
    return acc;
  }, {});

  return Object.keys(unfiltered).map(br => {
    return {
      friendlyName: browserDetails[br].friendlyName,
      queryName: browserDetails[br].queryName,
      percent: getVersionsPercentage(filteredVersions[br], unfiltered[br]),
      browser: br,
      logo: browserDetails[br].logo,
      platform: browserDetails[br].platform,
      versions: getVersionsStatus(
        filteredVersions[br],
        unfiltered[br],
        incQuery,
        excQuery
      ),
      defaultChecked: true
    };
  });
};
