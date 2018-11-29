import browserslist from 'browserslist';
import { createMatrix } from '../../../utils/createMatrix';

import { UPDATE_BROWSERLIST } from '../types';

interface IProps {
  filtered: any;
}

const initialState: IProps = {
  filtered: createMatrix(browserslist(['> 0.02%'])) // the initial query here should match the setting on
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
