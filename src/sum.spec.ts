import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('1+1 should return 2', () => {
    expect(sum(1, 1)).toEqual(2);
  });
  it('1+2+3+4+5 should return 15', () => {
    expect(sum(1, 2, 3, 4)).toEqual(10);
  });
});
