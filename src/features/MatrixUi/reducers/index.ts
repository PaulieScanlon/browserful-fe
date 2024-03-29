import {
  UPDATE_QUERY,
  UPDATE_VALUE,
  UPDATE_NAME,
  UPDATE_AUTO,
  UPDATE_INCLUDED,
  UPDATE_EXCLUDED,
  UPDATE_INC_EXC,
  UPDATE_BROWSER_QUERY,
  UPDATE_COMPARISON_QUERY,
  UPDATE_BROWSER_EXCLUDED
} from '../constants';

import { queryParams } from '../../../utils/enums';
import { arrayAdd } from '../../../utils/arrayUtils/arrayAdd';
import { arrayRemove } from '../../../utils/arrayUtils/arrayRemove';

import { config } from '../config/sliderControls.config';
import { config as uiMisc } from '../config/uiMisc.config';

import { IProps } from '../types';

const initialState: IProps = {
  [queryParams.LAST_VERSIONS]: {
    value: config[queryParams.LAST_VERSIONS].slider.defaultValue,
    checked: true
  },
  [queryParams.GLOBAL_USAGE]: {
    value: config[queryParams.GLOBAL_USAGE].slider.defaultValue,
    checked: true
  },
  [queryParams.YEAR_RELEASED]: {
    value: config[queryParams.YEAR_RELEASED].slider.defaultValue,
    checked: true
  },
  mn: uiMisc[queryParams.MATRIX_NAME].name,
  // @TODO it's a bit shit to have these query strings duplicated here
  browserQuery: `last ${
    config[queryParams.LAST_VERSIONS].slider.defaultValue
  } versions`,
  comparisonQuery: `last ${
    config[queryParams.LAST_VERSIONS].slider.domain[1]
  } versions`,
  incQuery: [''],
  excQuery: [''],
  excBrowser: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          checked: action.checked
        }
      };
    case UPDATE_VALUE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          value: action.value,
          checked: action.checked
        }
      };

    case UPDATE_NAME:
      return {
        ...state,
        mn: action.mn
      };

    case UPDATE_BROWSER_QUERY:
      return {
        ...state,
        browserQuery: action.browserQuery
      };

    case UPDATE_COMPARISON_QUERY:
      return {
        ...state,
        comparisonQuery: action.comparisonQuery
      };

    case UPDATE_AUTO:
      return {
        ...state,
        incQuery: arrayRemove(action.incQuery, action.query),
        excQuery: arrayRemove(action.excQuery, action.query)
      };

    case UPDATE_INCLUDED:
      return {
        ...state,
        incQuery: arrayAdd(action.incQuery, action.query),
        excQuery: arrayRemove(action.excQuery, action.query)
      };

    case UPDATE_EXCLUDED:
      return {
        ...state,
        excQuery: arrayAdd(action.excQuery, action.query),
        incQuery: arrayRemove(action.incQuery, action.query)
      };

    case UPDATE_INC_EXC:
      return {
        ...state,
        incQuery: action.incQuery,
        excQuery: action.excQuery
      };

    case UPDATE_BROWSER_EXCLUDED:
      return {
        ...state,
        excBrowser: action.checked
          ? arrayRemove(action.excBrowser, action.query)
          : arrayAdd(action.excBrowser, action.query)
      };

    default:
      return state;
  }
};
