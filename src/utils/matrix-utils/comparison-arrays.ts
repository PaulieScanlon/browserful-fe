import browserslist from 'browserslist';
import { queryTypes } from '../queryStrings';
import { config } from '../../features/SliderControls/config';

export const comparisonArrays = {
  [queryTypes.LAST_VERSIONS]: browserslist(
    `last ${config[queryTypes.LAST_VERSIONS].slider.domain[1]} versions`
  ),

  [queryTypes.GLOBAL_USAGE]: browserslist(
    `< ${config[queryTypes.GLOBAL_USAGE].slider.domain[1]}%`
  ),

  [queryTypes.YEAR_RELEASED]: browserslist(
    `since ${config[queryTypes.YEAR_RELEASED].slider.domain[0]}`
  )
};
