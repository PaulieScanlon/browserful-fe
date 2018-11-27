import browserslist from 'browserslist';
import { friendlyIfy } from '../../../utils/friendlyIfy';

import { UPDATE_BROWSERLIST } from '../types';

interface IProps {
  result: any;
}

const initialState: IProps = {
  result: friendlyIfy(browserslist(browserslist(['last 2 versions'])))
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BROWSERLIST:
      return {
        ...state,
        result: friendlyIfy(action.result)
      };

    default:
      return state;
  }
};
