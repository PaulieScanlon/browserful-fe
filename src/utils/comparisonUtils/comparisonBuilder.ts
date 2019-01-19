import { queryParams } from '../queryUtils/enums';
import { config } from '../../features/MatrixUi/config/sliderControls.config';

const standardExcluded = 'not dead';

const removeEmpty = v => v !== '';

export const comparisonBuilder = (
  lv: any, // @TODO should be IQuery
  gu: any, // @TODO should be IQuery
  yr: any // @TODO should be IQuery
) => {
  const objectQueries = {
    [queryParams.LAST_VERSIONS]: lv.checked
      ? `last ${config[queryParams.LAST_VERSIONS].slider.domain[1]} versions`
      : '',
    [queryParams.GLOBAL_USAGE]: gu.checked
      ? `>= ${config[queryParams.GLOBAL_USAGE].slider.domain[0]}%`
      : '',
    [queryParams.YEAR_RELEASED]: yr.checked
      ? `since ${config[queryParams.YEAR_RELEASED].slider.domain[0]}`
      : ''
  };

  const constructedString = Object.keys(objectQueries)
    .map(key => objectQueries[key])
    .filter(removeEmpty)
    .join(', ');

  return `${constructedString}, ${standardExcluded}`;
};

// export const comparisonQuery = {
//   [queryParams.LAST_VERSIONS]: browserslist(
//     `last ${
//       config[queryParams.LAST_VERSIONS].slider.domain[1]
//     } versions, ${standardExcluded}`
//   ),

//   [queryParams.GLOBAL_USAGE]: browserslist(
//     `>= ${
//       config[queryParams.GLOBAL_USAGE].slider.domain[0]
//     }%, ${standardExcluded}`
//   ),

//   [queryParams.YEAR_RELEASED]: browserslist(
//     `since ${
//       config[queryParams.YEAR_RELEASED].slider.domain[0]
//     }, ${standardExcluded}`
//   )
// };
