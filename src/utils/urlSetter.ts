import { queryDetails } from './queryBuilder';

export const escapeCGI = (str: string) => {
  return encodeURI(str).replace(/%20/g, '+');
};

export const urlSetter = (queryType: string, values: number) => {
  history.replaceState({}, '', `?${queryType}`);
  location.hash = escapeCGI(queryDetails(queryType, values));
};
