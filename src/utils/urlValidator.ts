import { queryParams, queryTypes, queryDefaults } from './queryStrings';
import { config } from '../features/ControlCards/config';

const clamp = (min, max, value) => {
  if (value >= min && value <= max) {
    return true;
  }
  return false;
};

export const urlValidator = () => {
  // TODO this should probs be the Router location not window locatoin
  const wls = window.location.search;

  const urlParams = new URLSearchParams(wls);

  const qt = urlParams.getAll(queryParams.QUERY_TYPE);
  const sv = urlParams.getAll(queryParams.SLIDER_VALUES);

  const queryType = () => {
    try {
      return Object.keys(queryTypes)
        .map(key => queryTypes[key])
        .includes(qt.toString());
    } catch {
      return false;
    }
  };

  if (queryType()) {
    const sliderMin = config[qt.toString()].slider.domain[0];
    const sliderMax = config[qt.toString()].slider.domain[1];

    if (queryType && clamp(sliderMin, sliderMax, sv.toString())) {
      return wls;
    }
  }

  return queryDefaults.GLOBAL_USAGE;
};
