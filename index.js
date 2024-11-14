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
  
  module.exports = { add, multiply, loginUser };