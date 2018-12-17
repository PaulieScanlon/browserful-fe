import { queryParams, queryTypes } from './queryStrings';
import { queryDefault } from './queryDefault';
import { config } from '../features/ControlSliders/config';

const clamp = (min: number, max: number, value: number | string) => {
  if (value >= min && value <= max) {
    return true;
  }
  return false;
};

export const urlValidator = () => {
  const wls = window.location.search;

  const urlParams = new URLSearchParams(wls);

  const qt = urlParams.getAll(queryParams.QUERY_TYPE);
  const sv = urlParams.getAll(queryParams.SLIDER_VALUES);
  const incq = urlParams.getAll(queryParams.INCLUDED_QUERY);
  const excq = urlParams.getAll(queryParams.EXCLUDED_QUERY);

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

  return `${queryDefault.LAST_VERSIONS}${incq}${excq}`;
};
