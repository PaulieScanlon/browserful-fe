import { config } from '../features/ControlCards/config';
import { queryTypes } from './queryStrings';

export const queryDefault = {
  GLOBAL_USAGE: `?qt=${queryTypes.GLOBAL_USAGE}&sv=${
    config[queryTypes.GLOBAL_USAGE].slider.defaultValue
  }`
};
