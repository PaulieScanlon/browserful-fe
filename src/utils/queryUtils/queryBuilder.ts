import { queryParams } from './enums';

export const incQueryBuilder = (query: Array<String>) =>
  query.map(query => ` ${query}`);

export const excQueryBuilder = (query: Array<String>) =>
  query.map(query => ` not ${query}`);

const removeEmpty = v => v !== '';

const standardExcluded = 'not dead';

export const queryBuilder = (
  // qt: string,
  lv: any, // @TODO should be IQuery
  gu: any, // @TODO should be IQuery
  yr: any, // @TODO should be IQuery
  incq: Array<String>,
  excq: Array<String>
) => {
  const overrideQueries = incQueryBuilder(incq.filter(removeEmpty)).concat(
    excQueryBuilder(excq.filter(removeEmpty))
  );

  const objectQueries = {
    [queryParams.LAST_VERSIONS]: lv.checked ? `last ${lv.value} versions` : '',
    [queryParams.GLOBAL_USAGE]: gu.checked ? `>= ${gu.value}%` : '',
    [queryParams.YEAR_RELEASED]: yr.checked ? `since ${yr.value}` : ''
  };

  const constructedString = Object.keys(objectQueries)
    .map(key => objectQueries[key])
    .filter(removeEmpty)
    .join(', ');

  if (overrideQueries.length < 1) {
    return `${constructedString},${overrideQueries} ${standardExcluded}`;
  }

  //TODO if all objectQueries are unchecked and override queries are empty return an empty string and don't add the not dead query

  return `${constructedString}, ${overrideQueries}, ${standardExcluded}`;
};
