import { queryTypes } from '../../utils/queryStrings';
import { colours } from '../../theme';

export const config = {
  [queryTypes.GLOBAL_USAGE]: {
    id: queryTypes.GLOBAL_USAGE,
    label: 'Global Usage',
    selectColour: colours.pink,
    valueSuffix: '%',
    slider: {
      sliderColour: colours.pink,
      domain: [0, 1],
      step: 0.001,
      tickCount: 14
    }
  },

  [queryTypes.YEAR_RELEASED]: {
    id: queryTypes.YEAR_RELEASED,
    label: 'Year Released',
    selectColour: colours.teal,
    valueSuffix: '',
    slider: {
      sliderColour: colours.teal,
      domain: [2010, 2018],
      step: 1,
      tickCount: 8
    }
  },

  [queryTypes.LAST_VERSIONS]: {
    id: queryTypes.LAST_VERSIONS,
    label: 'Last Versions',
    selectColour: colours.blue,
    valueSuffix: '',
    slider: {
      sliderColour: colours.blue,
      domain: [1, 20],
      step: 1,
      tickCount: 20
    }
  }
};
