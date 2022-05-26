import { convertUSDToPLN } from './../convertUSDtoPLN';

describe('ConvertUSDtoPLN', () => {
  it('should return proper value when good input', () => {
    expect(convertUSDToPLN(1)).toBe('PLN 3.50');
    expect(convertUSDToPLN(2)).toBe('PLN 7.00');
    expect(convertUSDToPLN(20)).toBe('PLN 70.00');
    expect(convertUSDToPLN(12)).toBe('PLN 42.00');
  });

  it('should return NaN when input is text', () => {
    expect(convertUSDToPLN('1')).toBeNaN();
    expect(convertUSDToPLN('2')).toBeNaN();
    expect(convertUSDToPLN('-123123')).toBeNaN();
    expect(convertUSDToPLN('anything')).toBeNaN();
  });

  it('should return error when it is not string or number', () => {
    expect(convertUSDToPLN({})).toBe('Error');
    expect(convertUSDToPLN([])).toBe('Error');
    expect(convertUSDToPLN(null)).toBe('Error');
    expect(convertUSDToPLN(function() {})).toBe('Error');
  });

  it('should return zero when input is lower than zero', () => {
    expect(convertUSDToPLN(-3)).toBe('PLN 0.00');
    expect(convertUSDToPLN(-51)).toBe('PLN 0.00');
    expect(convertUSDToPLN(-165)).toBe('PLN 0.00');
  });
});
