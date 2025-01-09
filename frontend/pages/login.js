import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import '../styles/login.css'; // Import the CSS file
import Layout from '@/app/layout';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setMessage('');

    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, {
        username,
        password,
      });

      setMessage(response.data.message);
      setError('');
      localStorage.setItem('authToken', response.data.token); // Save the token to localStorage
      localStorage.setItem(
        'user',
        JSON.stringify({
            username: response.data.username,
            email: response.data.email,
        })
    ); 
      router.push('/login-success'); // Redirect to dashboard after successful login
    } catch (err) {
      // Capture the specific error message sent from the backend
      setError(err.response?.data?.message || 'Invalid credentials');
      setMessage('');
    }
  };

  const handleForgotPasswordClick = () => {
    router.push('/reset'); // Redirect to the forgot password page
  };

  return (
    <Layout>

    <div className="login-form-container">
      <h1>Login</h1>

      {/* Login Form */}
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>} {/* Display specific error message */}

        <button type="submit">Login</button>
      </form>

      <div className="forgot-password-container">
        <a href="#" onClick={handleForgotPasswordClick}>Forgot your password?</a>
      </div>
    </div>
    </Layout>
  );
};

export default Login;
