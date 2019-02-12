export const urlSetter = (
  id: string,
  value: number | string,
  checked: boolean | null
) => {
  const wls = window.location.search;

  const urlParams = new URLSearchParams(wls);

  if (checked === false) {
    urlParams.delete(`${id}`);
  } else {
    urlParams.set(`${id}`, value.toString());
  }

  history.replaceState({}, '', `?${urlParams}`);
};
