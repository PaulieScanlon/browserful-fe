import { urlValidator } from './urlValidator';
import { queryDefault } from './queryDefault';

describe('urlValidator', () => {
  it('returns the default queryUrl if any of the query params are missing', () => {
    window.history.pushState({}, 'testA', '?whatever');

    expect(urlValidator()).toEqual(queryDefault.LAST_VERSIONS);
  });
  it('returns the default queryUrl if either of the query params are not valid', () => {
    window.history.pushState({}, 'testB', '?qt=blugh&sv=yaryar');
    expect(urlValidator()).toEqual(queryDefault.LAST_VERSIONS);
  });

  it(`returns the url un-touched because it's valid`, () => {
    window.history.pushState({}, 'testC', '?qt=lastVersions&sv=5');
    expect(urlValidator()).toEqual(window.location.search);
  });
});
