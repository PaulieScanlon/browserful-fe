import browserslist from 'browserslist';

import { browserDetails } from './browserDetails';

const unfiltered = browserslist(['last 20 versions']).reduce((acc, br) => {
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

const getVersionsPercentage = (updatedVersions: any) => {
  const percent =
    (updatedVersions.filter((version: any) => version.isIncluded === true)
      .length /
      updatedVersions.length) *
    100;

  return Math.round(percent);
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
      percent: getVersionsPercentage(
        getVersionsStatus(
          filteredVersions[br],
          unfiltered[br],
          incQuery,
          excQuery
        )
      ),
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
