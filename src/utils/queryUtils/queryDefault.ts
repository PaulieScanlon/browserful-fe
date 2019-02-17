import { config } from '../../features/MatrixUi/config/sliderControls.config';
import { config as uiMisc } from '../../features/MatrixUi/config/uiMisc.config';
import { queryParams } from '../enums';
// import { standardExcludedQuery } from './standardExcluded';

// &gu=${config[queryParams.GLOBAL_USAGE].slider.defaultValue}&yr=${
//   config[queryParams.YEAR_RELEASED].slider.defaultValue
// }&excq=${standardExcludedQuery}

export const queryDefault = {
  DEFAULT_QUERY: `?mn=${uiMisc[queryParams.MATRIX_NAME].name}&lv=${
    config[queryParams.LAST_VERSIONS].slider.defaultValue
  }`
};
