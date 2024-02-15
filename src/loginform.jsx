import React, { useState } from 'react';
import './loginform.css';

const LoginForm = () => {
  // State to manage form input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validations
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Additional validations (customize based on your requirements)
    // For example, check minimum length of the password
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // You can add more validations here

    // If validations pass, clear the error and proceed
    setError('');

    // You can add your login logic here, such as sending data to a server
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div class="container">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
