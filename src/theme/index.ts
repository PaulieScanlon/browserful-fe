export const colours = {
  pink: '#ff5ca3',
  blue: '#36b5d0',
  teal: '#36e5d0',
  purple: '#8b76bb',
  greyDark: '#333333',
  greyMid: '#666666',
  greyLight: '#cccccc',
  greyUltraLight: '#dedede',
  offWhite: '#f7f7f7',
  white: '#ffffff',
  greenLight: '#e8faf2',
  green: '#00b256',
  redLight: '#ffefef',
  red: '#ff000f',
  transparent: 'rgba(0,0,0,0)'
};

export const scaffolding = {
  gutterXl: '32px',
  gutterLg: '16px',
  gutterSm: '8px',
  gutterXs: '4px'
};

export const transitionBuilder = (value: string) => `${value} .3s ease-out`;

export const materialBuilder = (level: number) => {
  const material = {
    1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    4: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    5: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
  };

  return material[level];
};

export const common = {
  appBar: {
    height: '72px',
    zIndex: 998
  },
  sideBar: {
    width: '220px',
    zIndex: 999,
    colour: '#404040'
  }
};
