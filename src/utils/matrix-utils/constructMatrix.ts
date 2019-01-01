import browserslist from 'browserslist';
import { browserDetails } from '../browserDetails';
import { fullArrays } from './full-arrays';

import { IVersion } from './types';

export const constructMatrix = (
  queryType: string,
  browserQuery: string,
  incQuery: Array<String>,
  excQuery: Array<String>
) => {
  const builtQuery = browserslist(`${browserQuery}`);

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
        : false,
      platform: browserDetails[name].platform
    };
  });

  const namesList = versionsList.reduce((acc: Object, version: IVersion) => {
    const [name] = version.name.split(' ', 2);
    acc[name] = [].concat(acc[name] || [], {
      ...version
    });
    return {
      ...acc
    };
  }, {});

  const browserList = Object.keys(namesList).map(browser => {
    return {
      friendlyName: browserDetails[browser].friendlyName,
      logo: browserDetails[browser].logo,
      platform: browserDetails[browser].platform,
      totalCount: namesList[browser] ? namesList[browser].length : 0,
      includedCount: namesList[browser]
        ? namesList[browser].filter(version => version.isIncluded === true)
            .length
        : 0,
      expandCard: true,
      versions: namesList[browser]
    };
  });

  return {
    browserList: browserList
  };
};
