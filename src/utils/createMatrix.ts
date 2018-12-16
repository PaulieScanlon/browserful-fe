import browserslist from 'browserslist';

import { browserDetails } from './browserDetails';

const unfiltered = browserslist(['last 999 versions']).reduce((acc, br) => {
  const [name, version] = br.split(' ', 2);
  acc[name] = [].concat(acc[name] || [], {
    id: version,
    isIncluded: false
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
    const percent = Math.floor(
      (filteredVersions.length / unfiltered.length) * 100
    );
    return percent > 100 ? 100 : percent;
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
      friendlyName: browserDetails[br].friendlyName,
      queryName: browserDetails[br].queryName,
      percent: getVersionsPercentage(filteredVersions[br], unfiltered[br]),
      browser: br,
      logo: browserDetails[br].logo,
      platform: browserDetails[br].platform,
      versions: setIsIncluded(filteredVersions[br], unfiltered[br]),
      defaultChecked: true
    };
  });
};
