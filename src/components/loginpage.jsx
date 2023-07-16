import React, { useState } from 'react';

function LoginPage({ setUser }) {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(username);
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter your username" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
