import { UPDATE_THING } from '../types';

import { queryParams } from '../../../utils/query-utils/enums';
import { config } from '../../../features/SliderControls/config';

export interface IThingObject {
  [queryParams.QUERY_TYPE]: string;
  [queryParams.LAST_VERSIONS]: number;
  [queryParams.YEAR_RELEASED]: number;
  [queryParams.GLOBAL_USAGE]: number;
  browserQuery: string;
  incq: Array<String>;
  excq: Array<String>;
}

interface IProps {
  thingObject: IThingObject;
}

const initialState: IProps = {
  thingObject: {
    [queryParams.QUERY_TYPE]: '',
    [queryParams.LAST_VERSIONS]:
      config[queryParams.LAST_VERSIONS].slider.defaultValue,
    [queryParams.YEAR_RELEASED]:
      config[queryParams.YEAR_RELEASED].slider.defaultValue,
    [queryParams.GLOBAL_USAGE]:
      config[queryParams.GLOBAL_USAGE].slider.defaultValue,
    browserQuery: '',
    incq: [],
    excq: []
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_THING:
      console.log(action.thingObject);
      return {
        ...state,
        thingObject: action.thingObject
      };

    default:
      return state;
  }
};
