import { queryParams } from '../enums';
import { config } from '../../features/MatrixUi/config/sliderControls.config';

import { standardExcludedBrowsers } from './standardExcluded';

const removeEmpty = v => v !== '';

export const comparisonBuilder = (
  lv: any, // @TODO should be IQuery
  gu: any, // @TODO should be IQuery
  yr: any // @TODO should be IQuery
) => {
  // @TODO these object queries are the same in queryBuilder, refactor to combine these to methods
  const objectQueries = {
    [queryParams.LAST_VERSIONS]: lv.checked
      ? `last ${config[queryParams.LAST_VERSIONS].slider.domain[1]} versions`
      : '',
    [queryParams.GLOBAL_USAGE]: gu.checked
      ? `> ${config[queryParams.GLOBAL_USAGE].slider.domain[0]}%`
      : '',
    [queryParams.YEAR_RELEASED]: yr.checked
      ? `since ${config[queryParams.YEAR_RELEASED].slider.domain[0]}`
      : ''
  };

  const constructedString = Object.keys(objectQueries)
    .map(key => objectQueries[key])
    .filter(removeEmpty)
    .join(', ');

  return `${constructedString}, ${standardExcludedBrowsers}`;
};