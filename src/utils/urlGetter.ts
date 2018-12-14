export const unescapeCGI = (str: string) => {
  return decodeURI(str.replace(/\+/g, '%20'));
};

import { queryParams } from './queryStrings';

export const urlGetter = () => {
  const wls = window.location.search;

  const urlParams = new URLSearchParams(wls);

  const qt = urlParams.getAll(queryParams.QUERY_TYPE);
  const sv = urlParams.getAll(queryParams.SLIDER_VALUES);

  return {
    qt: qt.toString(),
    sv: Number(sv.toString())
  };
};
