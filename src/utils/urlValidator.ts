import { queryParams, queryTypes } from './queryStrings';
import { queryDefault } from './queryDefault';
import { config } from '../features/SliderControls/config';
import { incQueryBuilder, excQueryBuilder } from './queryBuilder';
import browserslist from 'browserslist';

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
  const incq = urlParams
    .getAll(queryParams.INCLUDED_QUERY)
    .toString()
    .split(',');
  const excq = urlParams
    .getAll(queryParams.EXCLUDED_QUERY)
    .toString()
    .split(',');

  const browserlistQuery = () => {
    try {
      browserslist(`${incQueryBuilder(incq).concat(...excQueryBuilder(excq))}`);
      return true;
    } catch (e) {
      return false;
    }
  };

  const queryType = () => {
    try {
      return Object.keys(queryTypes)
        .map(key => queryTypes[key])
        .includes(qt.toString());
    } catch (e) {
      return false;
    }
  };

  if (queryType()) {
    const sliderMin = config[qt.toString()].slider.domain[0];
    const sliderMax = config[qt.toString()].slider.domain[1];

    if (
      queryType &&
      clamp(sliderMin, sliderMax, sv.toString()) &&
      browserlistQuery()
    ) {
      return wls;
    }
  }

  return queryDefault.DEFAULT_QUERY;
};
