import { queryParams } from '../enums';
import { queryDefault } from '../queryUtils/queryDefault';
import { config } from '../../features/MatrixUi/config/sliderControls.config';
import browserslist from 'browserslist';

enum typeString {
  QUERY = 'query',
  SLIDER = 'slider',
  BROWSERLIST = 'browserlist',
  NOT_BROWSERSLIST = 'notBrowserslist'
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
  console.log('validateBrowserslist: ', value);
  // console.log('here: ', browserslist(`last 1 versions, ${value}`));
  try {
    // to test a value that is 'not' ...
    // we also need a valid browser query for browserslist to run
    browserslist(`last 1 versions, ${value}`);
    return true;
  } catch (e) {
    return false;
  }
};

// console.log('validateBrowserslist: ', validateBrowserslist('not chrome > 0'));

export const urlValidator = () => {
  const wls = window.location.search;
  console.log('wls: ', wls);

  const urlParams = new URLSearchParams(wls);

  const urlParamValues: IUrlParams = {
    [queryParams.MATRIX_NAME]: {
      type: typeString.QUERY,
      value: urlParams.getAll(queryParams.MATRIX_NAME).toString()
    },
    [queryParams.LAST_VERSIONS]: {
      type: typeString.SLIDER,
      value: urlParams.getAll(queryParams.LAST_VERSIONS).toString()
    },
    [queryParams.GLOBAL_USAGE]: {
      type: typeString.SLIDER,
      value: urlParams.getAll(queryParams.GLOBAL_USAGE).toString()
    },
    [queryParams.YEAR_RELEASED]: {
      type: typeString.SLIDER,
      value: urlParams.getAll(queryParams.YEAR_RELEASED).toString()
    },
    [queryParams.EXCLUDED_QUERY]: {
      type: typeString.BROWSERLIST,
      value: urlParams
        .getAll(queryParams.EXCLUDED_QUERY)
        .toString()
        .replace(',', '')
    },
    [queryParams.INCLUDED_QUERY]: {
      type: typeString.BROWSERLIST,
      value: urlParams
        .getAll(queryParams.INCLUDED_QUERY)
        .toString()
        .replace(',', '')
    },
    [queryParams.EXCLUDED_BROWSER]: {
      type: typeString.NOT_BROWSERSLIST,
      value: urlParams
        .getAll(queryParams.EXCLUDED_BROWSER)
        .toString()
        .replace(',', '')
    }
  };

  // console.log('urlParamValues: ', urlParamValues);

  const validate = {
    [typeString.QUERY]: (item: any) => {
      if (urlParamValues[item].value) {
        return true;
      }
      return false;
    },
    [typeString.SLIDER]: (item: any) => {
      if (urlParamValues[item].value) {
        return validateRanges(
          config[item].slider.domain[0],
          config[item].slider.domain[1],
          urlParamValues[item].value
        );
      }
      return true;
    },
    [typeString.BROWSERLIST]: (item: any) => {
      try {
        urlParamValues[item].value;
        return validateBrowserslist(urlParamValues[item].value);
      } catch (e) {
        return false;
      }
    },
    [typeString.NOT_BROWSERSLIST]: (item: any) => {
      try {
        urlParamValues[item].value;
        console.log(
          'thing: ',
          urlParamValues[item].value.toString().split(',')
        );
        // console.log('thing: ', Array.from(urlParamValues[item].value as string));
        return validateBrowserslist(`not ${urlParamValues[item].value} > 0`);
      } catch (e) {
        return false;
      }
    }
  };

  // console.log('validate: ', validate);

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

  console.log('urlParamObject: ', urlParamObject);

  const checkTrueValues = Object.keys(urlParamObject)
    .map(url => {
      return urlParamObject[url].valid;
    })
    .every(urlValid => urlValid === true);

  return checkTrueValues ? wls : queryDefault.DEFAULT_QUERY;
};
