import { urlValidator } from './urlValidator';
import { queryDefault } from '../queryUtils/queryDefault';

describe('urlValidator', () => {
  it('returns the default queryUrl if mn is missing', () => {
    window.history.pushState({}, 'testA', '?notValid=incorrect');
    expect(urlValidator()).toEqual(queryDefault.DEFAULT_QUERY);
  });

  it('returns default url if last versions is not within sliders range', () => {
    window.history.pushState({}, 'testB', '?mn=test+matrix&lv=999');
    expect(urlValidator()).toEqual(queryDefault.DEFAULT_QUERY);
  });

  it('returns default url if global usage is not within sliders range', () => {
    window.history.pushState({}, 'testB', '?mn=test+matrix&gu=999');
    expect(urlValidator()).toEqual(queryDefault.DEFAULT_QUERY);
  });

  it('returns default url if year released is not within sliders range', () => {
    window.history.pushState({}, 'testB', '?mn=test+matrix&yr=999');
    expect(urlValidator()).toEqual(queryDefault.DEFAULT_QUERY);
  });

  it(`returns the url un-touched because it's valid`, () => {
    window.history.pushState(
      {},
      'testC',
      '?mn=test+matrix&lv=5&gu=0.3&yr=2015&excq=%2CChrome+70%2CChrome+69&incq=%2CChrome+70'
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
