import { queryTypes } from '../../utils/queryStrings';
import { colours } from '../../theme';

const currentYear = new Date().getFullYear();

export const config = {
  [queryTypes.LAST_VERSIONS]: {
    id: queryTypes.LAST_VERSIONS,
    label: 'Last Versions',
    selectColour: colours.pink,
    valueSuffix: '',
    slider: {
      defaultValue: 5,
      sliderColour: colours.pink,
      domain: [1, 30],
      step: 1,
      tickCount: 20
    }
  },

  [queryTypes.GLOBAL_USAGE]: {
    id: queryTypes.GLOBAL_USAGE,
    label: 'Global Usage',
    selectColour: colours.blue,
    valueSuffix: '%',
    slider: {
      defaultValue: 0.3,
      sliderColour: colours.blue,
      domain: [0, 2],
      step: 0.01,
      tickCount: 14
    }
  },

  [queryTypes.YEAR_RELEASED]: {
    id: queryTypes.YEAR_RELEASED,
    label: 'Year Released',
    selectColour: colours.teal,
    valueSuffix: '',
    slider: {
      defaultValue: 2015,
      sliderColour: colours.teal,
      domain: [currentYear - 10, currentYear],
      step: 1,
      tickCount: 8
    }
  }
};
