const { add, multiply, loginUser, checkLoanEligibility } = require('./index');

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

describe('Parameterized Tests for checkLoanEligibility Function', () => {
    test.each([
      [700, 0.3, 60000, 'Loan approved'],
      [600, 0.3, 60000, 'Credit score too low for loan approval'],
      [700, 0.5, 60000, 'Debt-to-income ratio too high for loan approval'],
      [700, 0.3, 40000, 'Income too low for large loan approval'],
      [650, 0.4, 50000, 'Loan approved'],
      [649, 0.4, 50000, 'Credit score too low for loan approval'],
      [700, 0.39, 49999, 'Income too low for large loan approval'],
    ])(
      'checkLoanEligibility(%i, %f, %i) should return "%s"',
      (creditScore, debtToIncomeRatio, income, expected) => {
        expect(checkLoanEligibility(creditScore, debtToIncomeRatio, income)).toBe(
          expected
        );
      }
    );
  });