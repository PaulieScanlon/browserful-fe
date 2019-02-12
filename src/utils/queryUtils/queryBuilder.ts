import { queryParams } from '../enums';
import { standardExcludedBrowsers } from './standardExcluded';

export const incQueryBuilder = (query: Array<String>) =>
  query.map(query => ` ${query}`);

export const excQueryBuilder = (query: Array<String>) =>
  query.map(query => ` not ${query}`);

const removeEmpty = v => v !== '';

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

  if (overrideQueries.length < 1 && constructedString !== '') {
    return `${constructedString}, ${standardExcludedBrowsers}`;
  }

  if (constructedString === '') {
    return '';
  }

  return `${constructedString},${overrideQueries}, ${standardExcludedBrowsers}`;
};
