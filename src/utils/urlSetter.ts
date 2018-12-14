export const escapeCGI = (str: string) => {
  return encodeURI(str).replace(/%20/g, '+');
};

export const urlSetter = (qt: string, sv: number) => {
  const urlParams = new URLSearchParams();

  urlParams.set('qt', qt);
  urlParams.set('sv', sv.toString());
  history.replaceState({}, '', `?${urlParams}`);
};
