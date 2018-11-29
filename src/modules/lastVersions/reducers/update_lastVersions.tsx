import { UPDATE_LASTVERSIONS } from '../types';

interface IProps {
  value: any;
}

const initialState: IProps = {
  value: '5'
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LASTVERSIONS:
      return {
        ...state,
        value: action.value
      };
    default:
      return state;
  }
};
