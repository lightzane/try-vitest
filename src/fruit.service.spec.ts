import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { FruitService, Fruit } from './fruit.service';

describe('SampleService', () => {
  let service: FruitService;

  beforeEach(() => {
    service = new FruitService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('plan()', () => {
    let fruitStorage: Fruit[];

    beforeEach(() => {
      vi.useFakeTimers();
      fruitStorage = service.fruitStorage;
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('should only store an Apple', () => {
      service.plant();

      vi.advanceTimersByTime(1000); // 1 second

      expect(fruitStorage.length).toEqual(1);
      expect(fruitStorage).toContain(Fruit.APPLE);
      expect(fruitStorage).not.toContain(Fruit.BANANA);
    });

    it('should store Apple and Banana', () => {
      service.plant();

      vi.advanceTimersByTime(3000); // 3 second

      expect(fruitStorage.length).toEqual(2);
      expect(fruitStorage).toContain(Fruit.APPLE);
      expect(fruitStorage).toContain(Fruit.BANANA);
      expect(fruitStorage).not.toContain(Fruit.CHERRY);
    });

    it('should store Apple, Banana and Cherry', () => {
      service.plant();

      vi.advanceTimersByTime(5000); // 5 second

      expect(fruitStorage.length).toEqual(3);
      expect(fruitStorage).toContain(Fruit.APPLE);
      expect(fruitStorage).toContain(Fruit.BANANA);
      expect(fruitStorage).toContain(Fruit.CHERRY);
    });
  });
});
