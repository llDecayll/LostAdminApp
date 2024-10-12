import React from 'react';

function LogoutPopup({ onConfirm, onCancel }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2 style={styles.title}>Confirm Logout</h2>
        <p style={styles.message}>Are you sure you want to log out?</p>
        <div style={styles.buttonContainer}>
          <button onClick={onCancel} style={styles.cancelButton}>Cancel</button>
          <button onClick={onConfirm} style={styles.confirmButton}>Logout</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  popup: {
    backgroundColor: '#1E1E1E',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    color: '#FFFFFF',
    marginBottom: '10px',
  },
  message: {
    color: '#FFFFFF',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cancelButton: {
    backgroundColor: '#2C2C2C',
    color: '#FFFFFF',
    border: 'none',
    padding: '8px 16px',
    marginRight: '10px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  confirmButton: {
    backgroundColor: '#FF7B00',
    color: '#FFFFFF',
    border: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};

export default LogoutPopup;

