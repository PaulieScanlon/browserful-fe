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

  const browsers = Object.keys(browsersList).map(br => {
    return {
      friendlyName: browserDetails[br].friendlyName,
      logo: browserDetails[br].logo,
      platform: browserDetails[br].platform,
      totalCount: browsersList[br] ? browsersList[br].length : 0,
      includedCount: browsersList[br]
        ? browsersList[br].filter(version => version.isIncluded === true).length
        : 0,
      expandCard: true,
      versions: browsersList[br]
    };
  });

  const totalBrowsers = browsers
    .map(browser => browser.totalCount)
    .reduce((a, b) => a + b, 0);

  const totalIncluded = browsers
    .map(browser => browser.includedCount)
    .reduce((a, b) => a + b, 0);

  return {
    browsers,
    totalBrowsers: totalBrowsers,
    totalIncluded: totalIncluded,
    percentIncluded: Math.round((totalIncluded / totalBrowsers) * 100)
  };
};
