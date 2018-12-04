import changeCase from 'change-case';

export const actionBuilder = (queryType: string) => {
  return `update${changeCase.pascalCase(queryType)}`;
};
