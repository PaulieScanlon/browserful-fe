import { queryTypes } from '../utils/queryStrings';

export const queryDetails = (qt: string, sv: number) => {
  const constructed = {
    [queryTypes.GLOBAL_USAGE]: `>= ${sv}%`,
    [queryTypes.YEAR_RELEASED]: `since ${sv}`,
    [queryTypes.LAST_VERSIONS]: `last ${sv} versions`
  };

  return constructed[qt];
};

export const queryBuilder = (qt: string, sv: number) => {
  return queryDetails(qt, sv);
};
