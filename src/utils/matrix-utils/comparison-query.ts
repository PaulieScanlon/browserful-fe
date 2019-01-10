import browserslist from 'browserslist';
import { queryTypes } from '../query-utils/queryStrings';
import { config } from '../../features/SliderControls/config';

const standardExcluded = 'not dead, not unreleased Chrome versions';

export const comparisonQuery = {
  [queryTypes.LAST_VERSIONS]: browserslist(
    `last ${
      config[queryTypes.LAST_VERSIONS].slider.domain[1]
    } versions, ${standardExcluded}`
  ),

  [queryTypes.GLOBAL_USAGE]: browserslist(
    `< ${
      config[queryTypes.GLOBAL_USAGE].slider.domain[1]
    }%, ${standardExcluded}`
  ),

  [queryTypes.YEAR_RELEASED]: browserslist(
    `since ${
      config[queryTypes.YEAR_RELEASED].slider.domain[0]
    }, ${standardExcluded}`
  )
};
