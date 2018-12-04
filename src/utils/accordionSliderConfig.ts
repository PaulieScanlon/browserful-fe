import { queryStrings } from './queryStrings';
import { colours } from '../theme';

export const accordionSliderConfig = [
  {
    id: queryStrings.GLOBAL_USAGE,
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

  {
    id: queryStrings.YEAR_RELEASED,
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
  {
    id: queryStrings.LAST_VERSIONS,
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
];
