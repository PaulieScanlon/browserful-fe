export const escapeCGI = (str: string) => {
  return encodeURI(str).replace(/%20/g, '+');
};

export const unescapeCGI = (str: string) => {
  return decodeURI(str.replace(/\+/g, '%20'));
};
