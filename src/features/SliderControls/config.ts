import { queryTypes } from '../../utils/query-utils/queryStrings';

const currentYear = new Date().getFullYear();

export const config = {
  [queryTypes.LAST_VERSIONS]: {
    id: queryTypes.LAST_VERSIONS,
    label: 'Last Versions',
    valueSuffix: '',
    slider: {
      defaultValue: 5,
      domain: [1, 20],
      step: 1,
      tickCount: 20
    }
  },

  [queryTypes.GLOBAL_USAGE]: {
    id: queryTypes.GLOBAL_USAGE,
    label: 'Global Usage',
    valueSuffix: '%',
    slider: {
      defaultValue: 0.3,
      domain: [0, 2],
      step: 0.01,
      tickCount: 14
    }
  },

  [queryTypes.YEAR_RELEASED]: {
    id: queryTypes.YEAR_RELEASED,
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
