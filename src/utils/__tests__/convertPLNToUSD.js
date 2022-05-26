import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });

  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('1')).toBeNaN();
    expect(convertPLNToUSD('2')).toBeNaN();
    expect(convertPLNToUSD('-123123')).toBeNaN();
    expect(convertPLNToUSD('anything')).toBeNaN();
  });

  it('should return error when it is not string or number', () => {
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD(null)).toBe('Error');
    expect(convertPLNToUSD(function() {})).toBe('Error');
  });

  it('should return zero when input is lower than zero', () => {
    expect(convertPLNToUSD(-3)).toBe('$0.00');
    expect(convertPLNToUSD(-51)).toBe('$0.00');
    expect(convertPLNToUSD(-165)).toBe('$0.00');
  });
});
