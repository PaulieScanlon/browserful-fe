export enum platform {
  MOBILE = 'mobile',
  DESKTOP = 'desktop'
}

export const browserDetails = {
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
    platform: platform.MOBILE
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
