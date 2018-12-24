import { config } from '../features/SliderControls/config';
import { queryTypes } from './queryStrings';

export const queryDefault = {
  DEFAULT_QUERY: `?qt=${queryTypes.LAST_VERSIONS}&sv=${
    config[queryTypes.LAST_VERSIONS].slider.defaultValue
  }&excq=%2CExplorer+9%2CExplorer+8%2CExplorer+7%2CExplorer+6%2CExplorer+5.5&incq=`
};
