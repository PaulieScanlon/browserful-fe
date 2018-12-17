import { config } from '../features/ControlSliders/config';
import { queryTypes } from './queryStrings';

export const queryDefault = {
  LAST_VERSIONS: `?qt=${queryTypes.LAST_VERSIONS}&sv=${
    config[queryTypes.LAST_VERSIONS].slider.defaultValue
  }&excq=%2CExplorer+5.5%2CExplorer+6%2CExplorer+7%2CExplorer+8%2CExplorer+9&incq=`
};
