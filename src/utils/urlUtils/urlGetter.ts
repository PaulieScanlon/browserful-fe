import { queryParams } from '../queryUtils/enums';

export const urlGetter = () => {
  const wls = window.location.search;

  const urlParams = new URLSearchParams(wls);

  const qt = urlParams.getAll(queryParams.QUERY_TYPE);
  const sv = urlParams.getAll(queryParams.SLIDER_VALUES).toString();
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

  return {
    qt: qt.toString(),
    sv: Number(sv),
    mn: mn,
    incq: incq,
    excq: excq
  };
};
