import { config } from '../../features/MatrixUi/config/sliderControls.config';
import { config as uiMisc } from '../../features/MatrixUi/config/uiMisc.config';
import { queryParams } from './enums';

export const queryDefault = {
  DEFAULT_QUERY: `?qt=${queryParams.LAST_VERSIONS}&sv=${
    config[queryParams.LAST_VERSIONS].slider.defaultValue
  }&excq=%2Cie+5.5%2Cie+6%2Cie+7%2Cie+8%2Cie+9&incq=&mn=${
    uiMisc[queryParams.MATRIX_NAME].name
  }`
};
