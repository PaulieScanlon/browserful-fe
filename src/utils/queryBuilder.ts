import { queryTypes } from '../utils/queryStrings';

export const queryBuilder = (
  qt: string,
  sv: number,
  iq: Array<String>,
  eq: Array<String>
) => {
  // console.log('iq: ', iq);
  // console.log('eq: ', eq);

  const excQuery = eq.map(query => {
    return query ? `not ${query},` : '';
  });

  const constructed = {
    [queryTypes.GLOBAL_USAGE]: `>=${sv}%, ${iq}, ${excQuery}`,
    [queryTypes.YEAR_RELEASED]: `since ${sv}, ${iq}, ${excQuery}`,
    [queryTypes.LAST_VERSIONS]: `last ${sv} versions, ${iq}, ${excQuery}`
  };

  return constructed[qt];
};
