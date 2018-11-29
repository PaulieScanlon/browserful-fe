import browserslist from 'browserslist';
import { createMatrix } from '../../../utils/createMatrix';

import { UPDATE_BROWSERLIST } from '../types';

interface IProps {
  filtered: any;
}

const initialState: IProps = {
  // the initial query here should match the setting on the sliders
  // filtered: createMatrix(browserslist(['> 0.02%']))
  // filtered: createMatrix(browserslist(['since 2015']))
  filtered: createMatrix(browserslist(['last 5 versions']))
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
