import { queryParams } from '../../../utils/enums';

const currentYear = new Date().getFullYear();

export const config = {
  [queryParams.LAST_VERSIONS]: {
    id: queryParams.LAST_VERSIONS,
    label: 'Last Versions',
    valueSuffix: '',
    slider: {
      defaultValue: 5,
      domain: [1, 10],
      step: 1,
      tickCount: 10
    }
  },

  [queryParams.GLOBAL_USAGE]: {
    id: queryParams.GLOBAL_USAGE,
    label: 'Global Usage',
    valueSuffix: '%',
    slider: {
      defaultValue: 0.3,
      domain: [0, 2],
      step: 0.01,
      tickCount: 14
    }
  },

  [queryParams.YEAR_RELEASED]: {
    id: queryParams.YEAR_RELEASED,
    label: 'Year Released',
    valueSuffix: '',
    slider: {
      defaultValue: currentYear - 3,
      reversed: true,
      domain: [currentYear - 6, currentYear],
      step: 1,
      tickCount: 5
    }
  }
};
