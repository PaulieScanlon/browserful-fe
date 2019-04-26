import { queryParams } from '../enums';
import { IQuery } from '../../features/MatrixUi/types';
import { config } from '../../features/MatrixUi/config/sliderControls.config';

const removeEmpty = v => v !== '';

export const comparisonBuilder = (lv: IQuery, gu: IQuery, yr: IQuery) => {
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

  return `${constructedString}`;
};
