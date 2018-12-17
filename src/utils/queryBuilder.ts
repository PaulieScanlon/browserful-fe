import { queryTypes } from '../utils/queryStrings';

export const queryBuilder = (
  qt: string,
  sv: number,
  iq: Array<String>,
  eq: Array<String>
) => {
  // console.log('qt: ', qt);
  // console.log('sv: ', sv);
  // console.log('iq: ', iq);
  // console.log('eq: ', eq);

  const excQuery = eq.map(query => {
    return query ? ` not ${query}` : '';
  });

  const incQuery = iq.map(query => {
    return query ? ` ${query}` : '';
  });

  const combinedQuery = incQuery.concat(...excQuery);

  const constructed = {
    [queryTypes.GLOBAL_USAGE]: `>=${sv}%,${combinedQuery}`,
    [queryTypes.YEAR_RELEASED]: `since ${sv},${combinedQuery}`,
    [queryTypes.LAST_VERSIONS]: `last ${sv} versions,${combinedQuery}`
  };

  return constructed[qt];
};
