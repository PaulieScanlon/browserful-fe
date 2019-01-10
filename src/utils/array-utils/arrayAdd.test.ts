import { arrayAdd } from './arrayAdd';

const arrA = ['Chrome 69', 'Chrome 68'];

describe('arrayAdd', () => {
  it('adds a given value to an array', () => {
    const value = 'Chrome 70';
    expect(arrayAdd(arrA, value).includes(value)).toBe(true);
  });
});
