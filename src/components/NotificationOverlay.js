import React from 'react';

function NotificationOverlay({ notifications, onClose }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.content}>
        <h3 style={styles.title}>Notifications</h3>
        {notifications.length === 0 ? (
          <p style={styles.emptyMessage}>No new notifications</p>
        ) : (
          <ul style={styles.list}>
            {notifications.map((notification, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.notificationText}>{notification.text}</span>
                <span style={styles.notificationTime}>{notification.time}</span>
              </li>
            ))}
          </ul>
        )}
        <button style={styles.closeButton} onClick={onClose}>Close</button>
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
  content: {
    backgroundColor: '#2C2C2C',
    borderRadius: '8px',
    padding: '20px',
    width: '90%',
    maxWidth: '400px',
    maxHeight: '80%',
    overflowY: 'auto',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#FFFFFF',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    padding: '10px 0',
    borderBottom: '1px solid #3C3C3C',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationText: {
    color: '#FFFFFF',
    fontSize: '14px',
  },
  notificationTime: {
    color: '#B0B0B0',
    fontSize: '12px',
  },
  emptyMessage: {
    color: '#B0B0B0',
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    width: '100%',
  },
};

export default NotificationOverlay;

