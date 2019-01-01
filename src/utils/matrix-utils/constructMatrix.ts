import { browserDetails } from '../browserDetails';
import { fullArrays } from './full-arrays';

import { IVersion } from './types';

export const constructMatrix = (
  queryType: string,
  builtQuery: Array<String>,
  incQuery: Array<String>,
  excQuery: Array<String>
) => {
  const versionsList = fullArrays[queryType].map((browser: string) => {
    const [name, version] = browser.split(' ', 2);
    let concatQueryName = `${browserDetails[name].queryName} ${version}`;
    return {
      query: concatQueryName,
      name: name,
      version: version,
      isIncluded: builtQuery.includes(browser),
      hasOverride: incQuery.includes(concatQueryName)
        ? 'isIncluded'
        : false || excQuery.includes(concatQueryName)
        ? 'isExcluded'
        : false
    };
  });

  const browsersList = versionsList.reduce((acc: Object, version: IVersion) => {
    const [name] = version.name.split(' ', 2);
    acc[name] = [].concat(acc[name] || [], {
      ...version
    });
    return {
      ...acc
    };
  }, {});

  return Object.keys(browsersList).map(br => {
    return {
      friendlyName: browserDetails[br].friendlyName,
      logo: browserDetails[br].logo,
      platform: browserDetails[br].platform,
      totalCount: browsersList[br] ? browsersList[br].length : 0,
      includedCount: builtQuery ? builtQuery.length : 0,
      expandCard: true,
      versions: browsersList[br]
    };
  });
};
