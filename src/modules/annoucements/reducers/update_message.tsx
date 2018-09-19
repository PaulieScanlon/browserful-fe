import { UPDATE_MESSAGE } from '../type';

interface IProps {
  message: string;
}

const initialState: IProps = {
  message: 'Initial Message'
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      return {
        ...state,
        message: action.message
      };

    default:
      return state;
  }
};
