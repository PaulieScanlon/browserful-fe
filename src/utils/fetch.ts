import 'isomorphic-fetch';

export const fetchRepos = () => {
  return fetch('https://api.github.com/repos/developit/preact')
    .then(res => res.json())
    .then(data => {
      return {
        isLoading: false,
        data,
        hasErrored: false
      };
    })
    .catch(() => {
      return {
        isLoading: false,
        data: null,
        hasErrored: true
      };
    });
};
