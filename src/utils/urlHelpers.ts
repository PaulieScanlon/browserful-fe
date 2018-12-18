export const escapeUri = (str: string) => {
  return encodeURI(str).replace(/%20/g, '+');
};

export const unescapeUri = (str: string) => {
  return decodeURI(str.replace(/\+/g, '%20'));
};
