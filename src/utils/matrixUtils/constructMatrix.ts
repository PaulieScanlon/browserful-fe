import browserslist from 'browserslist';
import { browserDetails } from './browserDetails';
import { platform, overrides } from './enums';

export const constructMatrix = (
  browserQuery: string,
  comparisonQuery: string,
  incQuery: Array<String>,
  excQuery: Array<String>
) => {
  const builtQuery = browserslist(`${browserQuery}`);
  const builtComparison = browserslist(`${comparisonQuery}`);

  const getIsIncluded = version => version.isIncluded;
  const getIsExcluded = version => !version.isIncluded;

  const getOverrride = q =>
    incQuery.includes(q)
      ? overrides.IS_INCLUDED
      : false || excQuery.includes(q)
      ? overrides.IS_EXCLUDED
      : false;

  const getTotalIncluded = (sum, item) => sum + item.totalIncluded;
  const getTotalExcluded = (sum, item) => sum + item.totalExcluded;

  const getTotal = (sum, item) => sum + item.total;

  const browserObject: any = builtComparison
    .map(result => {
      const [name, version] = result.split(' ', 2);
      return {
        name: name,
        version: version,
        platform: browserDetails[name].platform
      };
    })
    .reduce((browser, item) => {
      const { name, version } = item;

      browser[name] = browser[name] || {
        ...browserDetails[name],
        totalIncluded: 0,
        totalExcluded: 0,
        total: 0,
        expandCard: true,
        versions: []
      };

      let q = `${name} ${version}`;

      browser[name].versions.push({
        friendlyName: browserDetails[name].friendlyName,
        query: q,
        version: version,
        isIncluded:
          getOverrride(q) === overrides.IS_EXCLUDED
            ? false
            : builtQuery.includes(q),
        hasOverride: getOverrride(q),
        platform: browserDetails[name].platform
      });

      browser[name].totalIncluded = browser[name].versions.filter(
        getIsIncluded
      ).length;

      browser[name].totalExcluded = browser[name].versions.filter(
        getIsExcluded
      ).length;

      browser[name].total = browser[name].versions.length
        ? browser[name].versions.length
        : 0;

      return browser;
    }, {});

  const platformObject = Object.keys(browserObject)
    .map(browser => {
      const [name] = browser.split(' ', 1);
      return browserObject[name];
    })
    .reduce(
      (platforms, item) => {
        const { platform } = item;

        platforms[platform].push(item);

        return platforms;
      },
      { [platform.DESKTOP]: [], [platform.MOBILE]: [] }
    );

  return {
    browserList: {
      desktop: platformObject.desktop,
      mobile: platformObject.mobile
    },
    includedTotal: {
      desktop: platformObject.desktop.reduce(getTotalIncluded, 0),
      mobile: platformObject.mobile.reduce(getTotalIncluded, 0)
    },
    excludedTotal: {
      desktop: platformObject.desktop.reduce(getTotalExcluded, 0),
      mobile: platformObject.mobile.reduce(getTotalExcluded, 0)
    },
    total: {
      desktop: platformObject.desktop.reduce(getTotal, 0),
      mobile: platformObject.mobile.reduce(getTotal, 0)
    }
  };
};
