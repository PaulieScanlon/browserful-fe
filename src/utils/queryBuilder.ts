import { queryTypes } from '../utils/queryStrings';

// const included = [''];
// const excluded = ['not ie 8, not ie 9'];

export const queryBuilder = (qt: string, sv: number) => {
  const constructed = {
    [queryTypes.GLOBAL_USAGE]: `>=${sv}%`,
    [queryTypes.YEAR_RELEASED]: `since ${sv}`,
    [queryTypes.LAST_VERSIONS]: `last ${sv} versions`
  };

  return constructed[qt];
};
