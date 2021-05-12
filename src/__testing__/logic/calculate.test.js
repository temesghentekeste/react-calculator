import calculate from '../../logic/calculate';

describe('Operations from calculate.js file', () => {
  test('should return correct addition operation on = btn click', () => {
    const calculatorData = {
      calculated: false,
      currentDisplay: '3',
      next: '3',
      operation: '+',
      total: '12',
    };

    const result = calculate(calculatorData, '=');

    expect(result).toStrictEqual({
      calculated: true,
      currentDisplay: '15',
      next: '0',
      operation: null,
      total: 15,
    });
  });

  test('should return correct subtraction operation on = btn click', () => {
    const calculatorData = {
      calculated: false,
      currentDisplay: '3',
      next: '3',
      operation: '-',
      total: '12',
    };

    const result = calculate(calculatorData, '=');

    expect(result).toStrictEqual({
      calculated: true,
      currentDisplay: '9',
      next: '0',
      operation: null,
      total: 9,
    });
  });
});
