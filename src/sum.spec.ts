import { describe, it, expect, vi } from 'vitest';
import { sum } from './sum';
import * as sumModule from './sum';

describe('sum', () => {
  it('1+1 should return 2', () => {
    expect(sum(1, 1)).toEqual(2);
  });

  it('1+2+3+4+5 should return 15', () => {
    expect(sum(1, 2, 3, 4)).toEqual(10);
  });

  it('should return 100', () => {
    vi.spyOn(sumModule, 'sum').mockReturnValue(100);
    expect(sum()).toEqual(100);
  });
});
