// components/LoginScreen.js
import React, { useState } from 'react';
import logo from '../assets/images/logo.png';

function LoginScreen({ onLogin }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (pin === '1234') {
      onLogin();
    } else {
      setError('Incorrect PIN. Please try again.');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
      <div style={styles.loginBox}>
        <h2 style={styles.title}>Login</h2>
        <input
          type="password"
          placeholder="Enter PIN"
          value={pin}
          onChange={(e) => {
            setPin(e.target.value);
            setError(''); // Clear error when input changes
          }}
          onKeyPress={handleKeyPress}
          style={styles.input}
        />
        {error && <p style={styles.errorMessage}>{error}</p>}
        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>
      </div>
      <p style={styles.copyright}>© 2024 Lost Stories App.</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#121212',
  },
  logoContainer: {
    marginBottom: '2rem',
  },
  logo: {
    width: '150px',  // Adjust as needed
    height: 'auto',
  },
  loginBox: {
    backgroundColor: '#1E1E1E',
    padding: '2rem',
    borderRadius: '8px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '1rem',
    color: '#FFFFFF',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    borderRadius: '4px',
    border: '1px solid #333',
    backgroundColor: '#2C2C2C',
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#FF7B00',
    color: '#FFFFFF',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  errorMessage: {
    color: '#FF0000',
    fontSize: '0.9rem',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
  },
  copyright: {
    color: '#FFFFFF',
    fontSize: '0.8rem',
    marginTop: '1rem',
    opacity: 0.7,
  },
};

export default LoginScreen;
