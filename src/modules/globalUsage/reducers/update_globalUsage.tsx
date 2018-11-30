import { UPDATE_GLOBALUSAGE } from '../types';

interface IProps {
  value: number;
}

const initialState: IProps = {
  value: 0.02
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GLOBALUSAGE:
      return {
        ...state,
        value: action.value
      };
    default:
      return state;
  }
};
