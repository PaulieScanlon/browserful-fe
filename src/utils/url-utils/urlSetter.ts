export const urlSetter = (param: string, value: number | string) => {
  const wls = window.location.search;

  const urlParams = new URLSearchParams(wls);

  urlParams.set(`${param}`, value.toString());

  history.replaceState({}, '', `?${urlParams}`);
};
