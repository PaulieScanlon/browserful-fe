import { queryParams } from '../enums';

export const urlGetter = () => {
  const wls = window.location.search;

  const urlParams = new URLSearchParams(wls);

  const lv = urlParams.getAll(queryParams.LAST_VERSIONS).toString();
  const gu = urlParams.getAll(queryParams.GLOBAL_USAGE).toString();
  const yr = urlParams.getAll(queryParams.YEAR_RELEASED).toString();

  const mn = urlParams.getAll(queryParams.MATRIX_NAME).toString();

  const incq = urlParams
    .getAll(queryParams.INCLUDED_QUERY)
    .toString()
    .split(',')
    .map(item => {
      return item;
    });
  const excq = urlParams
    .getAll(queryParams.EXCLUDED_QUERY)
    .toString()
    .split(',')
    .map(item => {
      return item;
    });

  const excb = urlParams
    .getAll(queryParams.EXCLUDED_BROWSER)
    .toString()
    .toLowerCase()
    .split(',');

  return {
    lv: {
      value: !!lv ? Number(lv) : null,
      checked: !!lv ? true : false
    },
    gu: {
      value: !!gu ? Number(gu) : null,
      checked: !!gu ? true : false
    },
    yr: {
      value: !!yr ? Number(yr) : null,
      checked: !!yr ? true : false
    },
    mn: mn,
    incq: incq,
    excq: excq,
    excb: excb
  };
};
