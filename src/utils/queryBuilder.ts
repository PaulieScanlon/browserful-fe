import { queryTypes } from '../utils/queryStrings';

const included = [''];
const excluded = ['not ie 8, not ie 9'];

export const queryBuilder = (qt: string, sv: number, exc: Array<String>) => {
  console.log('exc: ', exc);
  console.log('excluded: ', excluded);

  const constructed = {
    [queryTypes.GLOBAL_USAGE]: `>=${sv}%, ${included}, ${excluded}`,
    [queryTypes.YEAR_RELEASED]: `since ${sv}, ${included}, ${excluded}`,
    [queryTypes.LAST_VERSIONS]: `last ${sv} versions, ${included}, ${excluded}`
  };

  return constructed[qt];
};
