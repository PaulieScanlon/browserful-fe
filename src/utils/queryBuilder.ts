import { queryTypes } from '../utils/queryStrings';

export const queryDetails = (queryType, values) => {
  const constructed = {
    [queryTypes.GLOBAL_USAGE]: `>= ${values}%`,
    [queryTypes.YEAR_RELEASED]: `since ${values}`,
    [queryTypes.LAST_VERSIONS]: `last ${values} versions`
  };

  return constructed[queryType];
};

export const queryBuilder = (queryType: string, values: number) => {
  return queryDetails(queryType, values);
};
