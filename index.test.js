const { add, multiply, loginUser } = require('./index');

describe('Parameterized Tests for simple Math Functions', () => {
  test.each([
    [1, 2, 3],   
    [0, 0, 0],
    [-1, 1, 0],
    [2, 5, 7],
  ])('add(%i, %i) should return %i', (a, b, expected) => {
    expect(add(a, b)).toBe(expected);
  });

  test.each([
    [1, 2, 2],   
    [0, 5, 0],
    [-1, 1, -1],
    [2, 5, 10],
  ])('multiply(%i, %i) should return %i', (a, b, expected) => {
    expect(multiply(a, b)).toBe(expected);
  });
});

describe('Parameterized Tests for loginUser Function', () => {
  test.each([
    ['admin', 'admin123', 'Login successful'],
    ['user', 'user123', 'Login successful'],
    ['admin', 'wrongpass', 'Invalid credentials'],
    ['unknown', 'user123', 'Invalid credentials'],
    ['', '', 'Invalid credentials'],
  ])(
    'loginUser(%s, %s) should return "%s"',
    (username, password, expected) => {
      expect(loginUser(username, password)).toBe(expected);
    }
  );
});