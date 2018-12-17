import { queryTypes } from '../utils/queryStrings';

export const queryBuilder = (
  qt: string,
  sv: number,
  incq: Array<String>,
  excq: Array<String>
) => {
  const incQuery = incq.map(query => {
    return query ? ` ${query}` : '';
  });

  const excQuery = excq.map(query => {
    return query.length > 0 ? ` not ${query}` : '';
  });

  const combinedQuery = incQuery.concat(...excQuery);

  const constructed = {
    [queryTypes.GLOBAL_USAGE]: `>=${sv}%,${combinedQuery}`,
    [queryTypes.YEAR_RELEASED]: `since ${sv},${combinedQuery}`,
    [queryTypes.LAST_VERSIONS]: `last ${sv} versions,${combinedQuery}`
  };

  return constructed[qt];
};
