import operate from '../../logic/operate';

describe('calculate operations', () => {
  test('should perform addition correctly', () => {
    const sum = operate(5, 10, '+');
    expect(sum).toBe('15');
  });

  test('should not perform addition incorrectly', () => {
    const sum = operate(5, 100, '+');
    expect(sum).not.toBe('15');
  });

  test('should perform subtraction correctly', () => {
    const sum = operate(5, 10, '-');
    expect(sum).toBe('-5');
  });

  test('should not perform subtraction incorrectly', () => {
    const sum = operate(5, 100, '-');
    expect(sum).not.toBe('15');
  });

  test('should perform multiplication correctly', () => {
    const sum = operate(5, 10, 'X');
    expect(sum).toBe('50');
  });

  test('should not perform multiplication incorrectly', () => {
    const sum = operate(5, 100, 'X');
    expect(sum).not.toBe('15');
  });
});

 test('should perform division correctly', () => {
   const sum = operate(5, 10, '÷');
   expect(sum).toBe('0.5');
 });

 test('should not perform division incorrectly', () => {
   const sum = operate(5, 100, '÷');
   expect(sum).not.toBe('15');
 });
