import { urlValidator } from './urlValidator';
import { queryDefault } from '../query-utils/queryDefault';

describe('urlValidator', () => {
  it('returns the default queryUrl if any of the query params are missing', () => {
    window.history.pushState({}, 'testA', '?whatever=&whatever=');

    expect(urlValidator()).toEqual(queryDefault.DEFAULT_QUERY);
  });
  it('returns the default queryUrl if either of the query params are not valid', () => {
    window.history.pushState({}, 'testB', '?qt=blugh&sv=yaryar');
    expect(urlValidator()).toEqual(queryDefault.DEFAULT_QUERY);
  });
  it(`returns the url un-touched because it's valid`, () => {
    window.history.pushState(
      {},
      'testC',
      '?qt=lastVersions&sv=5&excq=%2CChrome+70%2CChrome+69&incq=%2CChrome+70'
    );
    expect(urlValidator()).toEqual(window.location.search);
  });
  it(`returns the default queryUrl if either incq or encq aren't valid browserslist queries`, () => {
    window.history.pushState(
      {},
      'testD',
      '?incq=excq=%2CChro_me+70&incq=%2CChro_me+69'
    );
    expect(urlValidator()).toEqual(queryDefault.DEFAULT_QUERY);
  });
});
