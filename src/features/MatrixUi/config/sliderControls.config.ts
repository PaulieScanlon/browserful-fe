import { queryParams } from '../../../utils/queryUtils/enums';

const currentYear = new Date().getFullYear();

export const config = {
  [queryParams.LAST_VERSIONS]: {
    id: queryParams.LAST_VERSIONS,
    label: 'Last Versions',
    valueSuffix: '',
    slider: {
      defaultValue: 5,
      domain: [1, 20],
      step: 1,
      tickCount: 20
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
      defaultValue: 2015,
      reversed: true,
      domain: [currentYear - 10, currentYear],
      step: 1,
      tickCount: 8
    }
  }
};
