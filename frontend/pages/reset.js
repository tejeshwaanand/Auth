import { useState } from 'react';
import axios from 'axios';
import '../styles/reset.css'; // Import the CSS file
import Layout from '@/app/layout';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1); // 1: Forgot Password, 2: Reset Password
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setMessage('');

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/forgot-password`, { email });
      setMessage(response.data.message);
      setError('');
      setStep(2); // Move to the next step
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send reset email');
      setMessage('');
    }
  };

  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setMessage('');

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/reset-password`, {
        token,
        newPassword,
      });
      setMessage(response.data.message);
      setError('');
      setStep(3); // Move to success message step
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to reset password');
      setMessage('');
    }
  };

  return (
    <Layout>

    <div className="reset-password-container">
      {step === 1 && (
        <form onSubmit={handleForgotPasswordSubmit}>
          <h1>Forgot Password</h1>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}

          <button type="submit">Send Reset Email</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleResetPasswordSubmit}>
          <h1>Reset Password</h1>
          <div>
            <label>Reset Token</label>
            <input
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
            />
          </div>
          <div>
            <label>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}

          <button type="submit">Reset Password</button>
        </form>
      )}

      {step === 3 && (
        <div className="success-message-container">
          <h1>Password Reset Successful</h1>
          <p>Your password has been successfully reset. Please login with your new password.</p>
        </div>
      )}
    </div>
    </Layout>
  );
};

export default ResetPassword;
