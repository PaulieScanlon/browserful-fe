import { arrayRemove } from './arrayRemove';

const arrA = ['Chrome 70', 'Chrome 69', 'Chrome 68'];

describe('arrayRemove', () => {
  it('removes a given value from an array', () => {
    const value = 'Chrome 70';
    expect(arrayRemove(arrA, value).includes(value)).toBe(false);
  });
});
