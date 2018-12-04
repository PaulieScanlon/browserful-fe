import { queryStrings } from '../utils/queryStrings';

export const queryDetails = (queryType, values) => {
  const constructed = {
    [queryStrings.GLOBAL_USAGE]: `>= ${values}%`,
    [queryStrings.YEAR_RELEASED]: `since ${values}`,
    [queryStrings.LAST_VERSIONS]: `last ${values} versions`
  };

  return constructed[queryType];
};

export const queryBuilder = (queryType: string, values: number) => {
  return queryDetails(queryType, values);
};
