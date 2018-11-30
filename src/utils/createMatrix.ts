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

const compareVersions = (filteredVersions: any, unfiltered: any) => {
  return unfiltered.map(version => {
    return {
      ...version,
      isIncluded: filteredVersions
        ? filteredVersions.includes(version.id)
        : false
    };
  });
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
      name: br,
      logo: browserDetails[br].logo,
      platform: browserDetails[br].platform,
      versions: compareVersions(filteredVersions[br], unfiltered[br]),
      defaultChecked: true
    };
  });
};
