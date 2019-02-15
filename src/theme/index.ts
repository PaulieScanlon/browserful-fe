export const colours = {
  pink: '#ff5ca3',
  blue: '#40c4ff',
  teal: '#36e5d0',
  purple: '#8b76bb',
  greyDark: '#333333',
  greyMid: '#666666',
  black: '#000000',
  offBlack: '#292929',

  greyLight: '#999999',
  greyUltraLight: '#dedede',
  offWhite: '#f7f7f7',
  white: '#ffffff',

  greenLight: '#e8faf2',
  green: '#00b256',
  redLight: '#ffefef',
  red: '#ff000f',
  orangeLight: '#f1c40f',
  orange: '#f39c12',
  transparent: 'rgba(0,0,0,0)',
  lightBox: 'rgba(50, 50, 50, 0.8)'
};

export const scaffolding = {
  gutterXxl: '42px',
  gutterXl: '32px',
  gutterLg: '16px',
  gutterMd: '12px',
  gutterSm: '8px',
  gutterXs: '4px'
};

export const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};

export const mq = Object.keys(breakpoints).map(
  bp => `@media (min-width: ${breakpoints[bp]})`
);

export const transitionBuilder = (value: string) => `${value} .2s linear`;

export const materialBuilder = (level: number) => {
  const material = {
    1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    4: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    5: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    6: '0px 0px 30px 0px rgba(0,0,0,0.3)'
  };

  return material[level];
};

export const common = {
  appBar: {
    height: '72px',
    zIndex: 997
  },

  sideBar: {
    width: '220px',
    zIndex: 998,
    colour: '#404040'
  },

  modal: {
    zIndex: 999
  }
};
