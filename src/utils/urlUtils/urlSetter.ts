export const urlSetter = (param: string, value: number | string) => {
  console.log('param: ', param, 'value: ', value);

  const wls = window.location.search;

  const urlParams = new URLSearchParams(wls);

  urlParams.set(`${param}`, value.toString());

  history.replaceState({}, '', `?${urlParams}`);
};
