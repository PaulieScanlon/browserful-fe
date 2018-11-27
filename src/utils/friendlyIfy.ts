const logos = {
  noLogo: 'darth',
  and_chr: 'chrome-for-android',
  and_ff: 'firefox-for-android',
  and_qq: 'qq-browser',
  and_uc: 'uc-browser-for-andrioid',
  android: 'android-browser',
  baidu: 'baidu-browser',
  chrome: 'chrome',
  edge: 'edge',
  firefox: 'firefox',
  ie: 'ie',
  ie_mob: 'ie-mobile',
  ios_saf: 'i-os-safari',
  op_mini: 'opera-mini',
  op_mob: 'opera-mobile',
  opera: 'opera',
  safari: 'safari',
  samsung: 'samsung-internet'
};

const friendlyName = {
  and_chr: 'Chrome (Android)',
  and_ff: 'Firefox (Android)',
  and_qq: 'QQ (Android)',
  and_uc: 'UC Browser (Android)',
  android: 'Android',
  baidu: 'Baidu',
  chrome: 'Chrome',
  edge: 'Edge',
  firefox: 'Firefox',
  ie: 'Internet Explorer',
  ie_mob: 'Internet Explorer Mobile',
  ios_saf: 'Safari (iOS)',
  op_mini: 'Opera Mini',
  op_mob: 'Opera Mobile',
  opera: 'Opera',
  safari: 'Safari',
  samsung: 'Samsung Internet'
};

export const friendlyIfy = (browserlist: any) => {
  const matrix = browserlist.reduce((acc, br) => {
    const [name, version] = br.split(' ', 2);
    acc[name] = [].concat(acc[name] || [], version);
    return acc;
  }, {});

  return Object.keys(matrix).map(br => {
    return {
      name: friendlyName[br],
      logo: logos[br],
      versions: matrix[br]
    };
  });
};
