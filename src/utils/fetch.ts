import 'isomorphic-fetch';
import { coverToBrowserfulData2 } from '../modules/browserful-data-2.0';

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

export const fetchCanIuseData2 = () => {
  return fetch(
    'https://s3.eu-west-2.amazonaws.com/browserful/caniuse/data-2.0.json',
    {
      headers: {
        'content-type': 'application/json'
      },
      mode: 'no-cors'
    }
  )
    .then(res => res.json())
    .then(data => {
      return {
        isLoading: false,
        data: coverToBrowserfulData2(data),
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
