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

  it.only(`returns the url un-touched because it's valid`, () => {
    window.history.pushState(
      {},
      'testC',
      '?mn=test+matrix&lv=3&gu=0.3&yr=2016&excq=%2Cchrome+71%2Cedge+16&incq=%2Cchrome+70%2Cedge+17&excb=%2Cchrome%2Cfirefox'
    );
    expect(urlValidator()).toEqual(window.location.search);
  });

  it(`returns the default queryUrl if either incq or encq aren't valid browserslist queries`, () => {
    window.history.pushState(
      {},
      'testD',
      '?excq=%2CChro_me+70&incq=%2CChro_me+69'
    );
    expect(urlValidator()).toEqual(queryDefault.DEFAULT_QUERY);
  });

  it('returns default queryUrl if excb is not a valid browser name', () => {
    // window.history.pushState({}, 'testE, ?excb=%2Cchrom_e');
    window.history.pushState(
      {},
      'testE',
      '?excq=%2CChrome+70&incq=%2CChrome+69&excb=%2Cchro_me'
    );
    expect(urlValidator()).toEqual(queryDefault.DEFAULT_QUERY);
  });
});
