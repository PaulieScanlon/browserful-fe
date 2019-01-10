import { queryParams } from './enums';

export const incQueryBuilder = (query: Array<String>) =>
  query.map(query => (query.length !== 0 ? `${query}` : query));

export const excQueryBuilder = (query: Array<String>) =>
  query.map(query => (query.length !== 0 ? `not ${query}` : query));

export const queryBuilder = (
  qt: string,
  sv: number,
  incq: Array<String>,
  excq: Array<String>
) => {
  const combinedQuery = incQueryBuilder(incq).concat(...excQueryBuilder(excq));

  const constructed = {
    [queryParams.LAST_VERSIONS]: `last ${sv} versions${combinedQuery}`,
    [queryParams.GLOBAL_USAGE]: `>= ${sv}%${combinedQuery}`,
    [queryParams.YEAR_RELEASED]: `since ${sv}${combinedQuery}`
  };

  return constructed[qt];
};
