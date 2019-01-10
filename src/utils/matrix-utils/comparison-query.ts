import browserslist from 'browserslist';
import { queryParams } from '../query-utils/enums';
import { config } from '../../features/SliderControls/config';

const standardExcluded = '';

export const comparisonQuery = {
  [queryParams.LAST_VERSIONS]: browserslist(
    `last ${
      config[queryParams.LAST_VERSIONS].slider.domain[1]
    } versions, ${standardExcluded}`
  ),

  [queryParams.GLOBAL_USAGE]: browserslist(
    `< ${
      config[queryParams.GLOBAL_USAGE].slider.domain[1]
    }%, ${standardExcluded}`
  ),

  [queryParams.YEAR_RELEASED]: browserslist(
    `since ${
      config[queryParams.YEAR_RELEASED].slider.domain[0]
    }, ${standardExcluded}`
  )
};
