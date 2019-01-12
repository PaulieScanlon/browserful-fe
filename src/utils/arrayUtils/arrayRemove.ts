export const arrayRemove = (arr: Array<String>, value: string) => {
  return arr.filter(index => {
    return index !== value;
  });
};
