import { UPDATE_YEARRELEASED } from '../types';

interface IProps {
  value: any;
}

const initialState: IProps = {
  value: '2015'
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_YEARRELEASED:
      return {
        ...state,
        value: action.value
      };
    default:
      return state;
  }
};
