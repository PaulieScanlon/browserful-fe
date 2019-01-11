import { queryParams } from '../query-utils/enums';

export const urlGetter = () => {
  const wls = window.location.search;

  const urlParams = new URLSearchParams(wls);

  const qt = urlParams.getAll(queryParams.QUERY_TYPE);
  const sv = urlParams.getAll(queryParams.SLIDER_VALUES);
  const incq = urlParams.getAll(queryParams.INCLUDED_QUERY).toString();
  const excq = urlParams.getAll(queryParams.EXCLUDED_QUERY).toString();

  return {
    qt: qt.toString(),
    sv: Number(sv.toString()),
    incq: incq,
    excq: excq
  };
};
