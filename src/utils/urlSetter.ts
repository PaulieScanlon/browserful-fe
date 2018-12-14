export const urlSetter = (qt: string, sv: number) => {
  const urlParams = new URLSearchParams();

  urlParams.set('qt', qt);
  urlParams.set('sv', sv.toString());

  history.replaceState({}, '', `?${urlParams}`);
};
