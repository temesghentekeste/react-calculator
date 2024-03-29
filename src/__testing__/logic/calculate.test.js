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

  test('should return correct subtraction result on = btn click', () => {
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

  test('should perform correct multiplication operation on = btn click', () => {
    const calculatorData = {
      calculated: false,
      currentDisplay: '3',
      next: '4',
      operation: 'X',
      total: '12',
    };

    const result = calculate(calculatorData, '=');

    expect(result).toStrictEqual({
      calculated: true,
      currentDisplay: '48',
      next: '0',
      operation: null,
      total: 48,
    });
  });

  test('should perform correct division operation on = btn click', () => {
    const calculatorData = {
      calculated: false,
      currentDisplay: '3',
      next: '4',
      operation: '÷',
      total: '12',
    };

    const result = calculate(calculatorData, '=');

    expect(result).toStrictEqual({
      calculated: true,
      currentDisplay: '3',
      next: '0',
      operation: null,
      total: 3,
    });
  });

  test('should reset calculaor data on AC btn click', () => {
    const calculatorData = {
      calculated: false,
      currentDisplay: '3',
      next: '4',
      operation: '',
      total: '12',
    };

    const result = calculate(calculatorData, 'AC');

    expect(result).toStrictEqual({
      calculated: false,
      currentDisplay: '0',
      next: null,
      operation: null,
      total: null,
    });
  });

  test('should perform correct percentage operation on % btn click', () => {
    const calculatorData = {
      calculated: false,
      currentDisplay: '7',
      next: null,
      operation: null,
      total: '7',
    };

    const result = calculate(calculatorData, '%');

    expect(result).toStrictEqual({
      calculated: true,
      currentDisplay: '0.07',
      next: null,
      operation: null,
      total: 0.07,
    });
  });

  test('should perform correct  operation on +/- btn click', () => {
    const calculatorData = {
      calculated: false,
      currentDisplay: '7',
      next: null,
      operation: null,
      total: '7',
    };

    const result = calculate(calculatorData, '+/-');

    expect(result).toStrictEqual({
      calculated: true,
      currentDisplay: '-7',
      next: null,
      operation: null,
      total: -7,
    });
  });
});
