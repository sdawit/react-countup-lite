import { defaultFormat, getSuffix } from '../src/utils/format';
import { easeOutCubic } from '../src/utils/easing';

describe('Format Utils', () => {
  describe('defaultFormat', () => {
    it('formats whole numbers correctly', () => {
      expect(defaultFormat(1000)).toBe('1,000');
      expect(defaultFormat(1000000)).toBe('1,000,000');
      expect(defaultFormat(0)).toBe('0');
    });

    it('handles decimals', () => {
      expect(defaultFormat(1000.5, 1)).toBe('1,000.5');
      expect(defaultFormat(1000.123, 2)).toBe('1,000.12');
      expect(defaultFormat(1000.999, 3)).toBe('1,000.999');
    });

    it('handles suffix', () => {
      expect(defaultFormat(1000, 0, 'k')).toBe('1,000k');
      expect(defaultFormat(1000.5, 1, '%')).toBe('1,000.5%');
    });

    it('handles negative numbers', () => {
      expect(defaultFormat(-1000)).toBe('-1,000');
      expect(defaultFormat(-1000.5, 1)).toBe('-1,000.5');
    });
  });

  describe('getSuffix', () => {
    it('returns original value and empty suffix for small numbers', () => {
      expect(getSuffix(100)).toEqual([100, '']);
      expect(getSuffix(999)).toEqual([999, '']);
      expect(getSuffix(0)).toEqual([0, '']);
    });

    it('returns k suffix for thousands', () => {
      expect(getSuffix(1000)).toEqual([1, 'k']);
      expect(getSuffix(1500)).toEqual([1.5, 'k']);
      expect(getSuffix(999999)).toEqual([999.999, 'k']);
    });

    it('returns M suffix for millions', () => {
      expect(getSuffix(1000000)).toEqual([1, 'M']);
      expect(getSuffix(1500000)).toEqual([1.5, 'M']);
      expect(getSuffix(999999999)).toEqual([999.999999, 'M']);
    });

    it('handles negative numbers', () => {
      expect(getSuffix(-1000)).toEqual([-1, 'k']);
      expect(getSuffix(-1000000)).toEqual([-1, 'M']);
    });

    it('respects custom suffix when provided', () => {
      expect(getSuffix(1000, '%')).toEqual([1000, '%']);
      expect(getSuffix(1000000, 'B')).toEqual([1000000, 'B']);
    });
  });
});

describe('Easing Utils', () => {
  describe('easeOutCubic', () => {
    it('returns correct values for key points', () => {
      expect(easeOutCubic(0)).toBe(0);
      expect(easeOutCubic(1)).toBe(1);
    });

    it('returns values between 0 and 1 for inputs between 0 and 1', () => {
      const result = easeOutCubic(0.5);
      expect(result).toBeGreaterThan(0);
      expect(result).toBeLessThan(1);
      expect(typeof result).toBe('number');
    });

    it('has easing behavior (starts fast, ends slow)', () => {
      const start = easeOutCubic(0.1);
      const end = easeOutCubic(0.9);
      // With easeOutCubic, the first 10% should be more than 10% of the total
      expect(start).toBeGreaterThan(0.1);
      // The last 10% should be less than 10% of the total
      expect(1 - end).toBeLessThan(0.1);
    });
  });
});
