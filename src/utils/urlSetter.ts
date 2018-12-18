export const urlSetter = (param: string, value: string) => {
  const wls = window.location.search;

  const urlParams = new URLSearchParams(wls);

  urlParams.set(`${param}`, value);

  history.replaceState({}, '', `?${urlParams}`);
};
