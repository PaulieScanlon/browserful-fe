import { queryParams } from './enums';

export const incQueryBuilder = (query: Array<String>) =>
  query.map(query => (query.length > 1 ? ` ${query}` : ''));

export const excQueryBuilder = (query: Array<String>) =>
  query.map(query => (query.length > 1 ? ` not ${query}` : ''));

const removeEmpty = v => v !== '';

export const queryBuilder = (
  qt: string,
  sv: number,
  incq: Array<String>,
  excq: Array<String>
) => {
  const combinedQuery = incQueryBuilder(incq.filter(removeEmpty)).concat(
    ...excQueryBuilder(excq.filter(removeEmpty))
  );

  const constructed = {
    [queryParams.LAST_VERSIONS]: `last ${sv} versions,${combinedQuery}`,
    [queryParams.GLOBAL_USAGE]: `>= ${sv}%,${combinedQuery}`,
    [queryParams.YEAR_RELEASED]: `since ${sv},${combinedQuery}`
  };

  return constructed[qt];
};
