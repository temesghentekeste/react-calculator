import operate from '../../logic/operate'

describe('calculate operations', () => {
  test('should perform addition correctly', () => {
    
    const sum = operate(5, 10, '+')
    expect(sum).toBe('15')
  })

  test('should not perform addition incorrectly', () => {
    const sum = operate(5, 100, '+');
    expect(sum).not.toBe('15');
  });
  
})
