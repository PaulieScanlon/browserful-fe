import { config } from '../../features/SliderControls/config';
import { queryTypes } from './queryStrings';

export const queryDefault = {
  DEFAULT_QUERY: `?qt=${queryTypes.LAST_VERSIONS}&sv=${
    config[queryTypes.LAST_VERSIONS].slider.defaultValue
  }&excq=%2Cie+5.5%2Cie+6%2Cie+7%2Cie+8%2Cie+9`
};
