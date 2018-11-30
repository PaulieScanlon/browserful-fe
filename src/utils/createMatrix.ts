import browserslist from 'browserslist';

import { browserDetails } from './browserDetails';

const unfiltered = browserslist(['last 999 versions']).reduce((acc, br) => {
  const [name, version] = br.split(' ', 2);
  acc[name] = [].concat(acc[name] || [], {
    id: version,
    isIncluded: false,
    defaultChecked: false
  });
  return acc;
}, {});

const setIsIncluded = (filteredVersions: any, unfiltered: any) => {
  return unfiltered.map(version => {
    return {
      ...version,
      isIncluded: filteredVersions
        ? filteredVersions.includes(version.id)
        : false
    };
  });
};

const getVersionsPercentage = (filteredVersions: any, unfiltered: any) => {
  if (filteredVersions) {
    return Math.round((filteredVersions.length / unfiltered.length) * 100);
  }
};

export const createMatrix = (filtered: any) => {
  const filteredVersions = filtered.reduce((acc, br) => {
    const [name, version] = br.split(' ', 2);
    acc[name] = [].concat(acc[name] || [], version);
    return acc;
  }, {});

  return Object.keys(unfiltered).map(br => {
    return {
      friendlyName: browserDetails[br].name,
      percent: getVersionsPercentage(filteredVersions[br], unfiltered[br]),
      name: br,
      logo: browserDetails[br].logo,
      platform: browserDetails[br].platform,
      versions: setIsIncluded(filteredVersions[br], unfiltered[br]),
      defaultChecked: true
    };
  });
};
