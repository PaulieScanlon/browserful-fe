import browserslist from 'browserslist';

export enum platform {
  MOBILE = 'mobile',
  DESKTOP = 'desktop'
}

const config = {
  and_chr: {
    name: 'Chrome (Android)',
    logo: 'chrome-for-android',
    platform: platform.MOBILE
  },
  and_ff: {
    name: 'Firefox (Android)',
    logo: 'firefox-for-android',
    platform: platform.MOBILE
  },
  and_qq: {
    name: 'QQ (Android)',
    logo: 'qq-browser',
    platform: platform.MOBILE
  },
  and_uc: {
    name: 'UC Browser (Android)',
    logo: 'uc-browser-for-android',
    platform: platform.MOBILE
  },
  android: {
    name: 'Android',
    logo: 'android-browser',
    platform: platform.MOBILE
  },
  bb: {
    name: 'BlackBerry',
    logo: 'blackberry-browser',
    platform: platform.MOBILE
  },
  baidu: {
    name: 'Baidu',
    logo: 'baidu-browser',
    platform: platform.MOBILE
  },
  chrome: {
    name: 'Chrome',
    logo: 'chrome',
    platform: platform.DESKTOP
  },
  edge: {
    name: 'Edge',
    logo: 'edge',
    platform: platform.DESKTOP
  },
  firefox: {
    name: 'Firefox',
    logo: 'firefox',
    platform: platform.DESKTOP
  },
  ie: {
    name: 'Internet Explorer',
    logo: 'ie',
    platform: platform.DESKTOP
  },
  ie_mob: {
    name: 'Internet Explorer Mobile',
    logo: 'ie-mobile',
    platform: platform.MOBILE
  },
  ios_saf: {
    name: 'Safari (iOS)',
    logo: 'i-os-safari',
    platform: platform.MOBILE
  },
  op_mini: {
    name: 'Opera Mini',
    logo: 'opera-mini',
    platform: platform.DESKTOP
  },
  op_mob: {
    name: 'Opera Mobile',
    logo: 'opera-mobile',
    platform: platform.MOBILE
  },
  opera: {
    name: 'Opera',
    logo: 'opera',
    platform: platform.DESKTOP
  },
  safari: {
    name: 'Safari',
    logo: 'safari',
    platform: platform.DESKTOP
  },
  samsung: {
    name: 'Samsung Internet',
    logo: 'samsung-internet',
    platform: platform.MOBILE
  }
};

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
      friendlyName: config[br].name,
      name: br,
      logo: config[br].logo,
      platform: config[br].platform,
      versions: compareVersions(filteredVersions[br], unfiltered[br]),
      defaultChecked: true
    };
  });
};
