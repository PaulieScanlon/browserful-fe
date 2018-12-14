import browserslist from 'browserslist';
import { createMatrix } from '../../../utils/createMatrix';

import { UPDATE_BROWSERLIST } from '../types';
import { queryBuilder } from '../../../utils/queryBuilder';
import { queryTypes } from '../../../utils/queryStrings';
import { config } from '../../../features/ControlCards/config';

interface IProps {
  filtered: any;
}

const initialState: IProps = {
  filtered: createMatrix(
    browserslist(
      queryBuilder(
        queryTypes.GLOBAL_USAGE,
        config[queryTypes.GLOBAL_USAGE].slider.defaultValue
      )
    )
  )
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BROWSERLIST:
      return {
        ...state,
        filtered: createMatrix(action.filtered)
      };
    default:
      return state;
  }
};
