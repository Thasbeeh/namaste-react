import Sum from '../sum';

test('should sum 2 numbers', () => {
  const result = Sum(3, 5);

  expect(result).toBe(8);
});
