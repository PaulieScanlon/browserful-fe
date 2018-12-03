import changeCase from 'change-case';
import { escapeCGI } from './uri';

const queryDetails = (queryType, values) => {
  const constructed = {
    globalUsage: `>= ${values}%`,
    yearReleased: `since ${values}`,
    lastVersions: `last ${values} versions`
  };

  return constructed[queryType];
};

export const queryBuilder = (queryType: string, values: number) => {
  history.replaceState({}, '', `?${queryType}`);
  location.hash = escapeCGI(queryDetails(queryType, values));

  return {
    action: `update${changeCase.pascalCase(queryType)}`,
    browserQuery: queryDetails(queryType, values),
    values: values
  };
};
