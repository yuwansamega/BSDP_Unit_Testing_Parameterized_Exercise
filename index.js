function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }

  function loginUser(username, password) {
    // Mock user data for testing
    const users = [
      { username: 'admin', password: 'admin123' },
      { username: 'user', password: 'user123' },
    ];
  
    // Check if the username and password match any user
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
  
    return user ? 'Login successful' : 'Invalid credentials';
  }

  function checkLoanEligibility(creditScore, debtToIncomeRatio, income) {
    const MIN_CREDIT_SCORE = 650;
    const MAX_DEBT_TO_INCOME_RATIO = 0.4;
    const MIN_INCOME_FOR_LARGE_LOAN = 50000;
  
    // Check credit score
    if (creditScore < MIN_CREDIT_SCORE) {
      return 'Credit score too low for loan approval';
    }
  
    // Check debt-to-income ratio
    if (debtToIncomeRatio > MAX_DEBT_TO_INCOME_RATIO) {
      return 'Debt-to-income ratio too high for loan approval';
    }
  
    // Check minimum income for larger loans
    if (income < MIN_INCOME_FOR_LARGE_LOAN) {
      return 'Income too low for large loan approval';
    }
  
    return 'Loan approved';
  }
  
  module.exports = { add, multiply, loginUser, checkLoanEligibility };