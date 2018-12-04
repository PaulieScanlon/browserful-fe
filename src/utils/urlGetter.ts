const unescapeCGI = (str: string) => {
  return decodeURI(str.replace(/\+/g, '%20'));
};

export const urlGetter = () => {
  // TODO need to validate the queryType and ...
  const queryType = location.search.replace(/[\?]/g, '');
  // TODO need to check if the query param is value it has a corresponding value that works with slider
  const values = Number(
    unescapeCGI(location.hash.slice(1)).replace(/[^\d.-]/g, '')
  );

  return {
    queryType: queryType,
    values: values
  };
};
