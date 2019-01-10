import { queryParams } from '../query-utils/enums';
import { queryDefault } from '../query-utils/queryDefault';
import { config } from '../../features/SliderControls/config';
import browserslist from 'browserslist';

enum typeString {
  SLIDER = 'slider',
  BROWSERSLIST = 'browserslist'
}

interface IUrlParams {
  [key: string]: {
    type: string;
    value: number | string;
    valid?: boolean;
  };
}

const validateRanges = (min: number, max: number, value: number | string) => {
  if (value >= min && value <= max) {
    return true;
  }
  return false;
};

const validateBrowserslist = (value: string | number) => {
  try {
    // to test a value that is 'not' ...
    // we also need a valid browser query for browserslist to run
    browserslist(`last 1 versions, ${value}`);
    return true;
  } catch (e) {
    return false;
  }
};

export const urlValidator = () => {
  const wls = window.location.search;

  const urlParams = new URLSearchParams(wls);

  const urlParamValues: IUrlParams = {
    [urlParams.getAll(queryParams.QUERY_TYPE).toString()]: {
      type: typeString.SLIDER,
      value: Number(urlParams.getAll(queryParams.SLIDER_VALUES).toString())
    },
    [queryParams.EXCLUDED_QUERY]: {
      type: typeString.BROWSERSLIST,
      value: urlParams
        .getAll(queryParams.EXCLUDED_QUERY)
        .toString()
        .trim()
    },
    [queryParams.INCLUDED_QUERY]: {
      type: typeString.BROWSERSLIST,
      value: urlParams
        .getAll(queryParams.INCLUDED_QUERY)
        .toString()
        .trim()
    }
  };

  const validate = {
    slider: (item: any) => {
      try {
        config[item].slider.domain[0];
        return validateRanges(
          config[item].slider.domain[0],
          config[item].slider.domain[1],
          urlParamValues[item].value
        );
      } catch (e) {
        return false;
      }
    },
    browserslist: (item: any) => {
      try {
        urlParamValues[item].value;
        return validateBrowserslist(urlParamValues[item].value);
      } catch (e) {
        return false;
      }
    }
  };

  const urlParamObject: IUrlParams = Object.keys(urlParamValues).reduce(
    (urls, item) => {
      urls[item] = urls[item] || {
        ...urlParamValues[item],
        valid: validate[urlParamValues[item].type](item)
      };

      return urls;
    },
    {}
  );

  const checkTrueValues = Object.keys(urlParamObject)
    .map(url => {
      return urlParamObject[url].valid;
    })
    .every(urlValid => urlValid === true);

  return checkTrueValues ? wls : queryDefault.DEFAULT_QUERY;
};
