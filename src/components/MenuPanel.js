import React from 'react';
import logo from '../assets/images/logo.png';

function MenuPanel({ selectedMenu, setSelectedMenu, onLogout }) {
  const menuItems = ['dashboard', 'users', 'stories', 'settings'];

  return (
    <div style={styles.menu}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
      <ul style={styles.menuList}>
        {menuItems.map((item) => (
          <li
            key={item}
            style={selectedMenu === item ? styles.activeMenuItem : styles.menuItem}
            onClick={() => setSelectedMenu(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
      <div style={styles.logoutContainer}>
        <button onClick={onLogout} style={styles.logoutButton}>
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  menu: {
    width: '200px',
    backgroundColor: '#1E1E1E',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    boxSizing: 'border-box',
  },
  logoContainer: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  logo: {
    width: '80%',
    maxWidth: '150px',
    height: 'auto',
  },
  menuList: {
    listStyleType: 'none',
    padding: 0,
    flex: 1,
  },
  menuItem: {
    padding: '10px',
    cursor: 'pointer',
  },
  activeMenuItem: {
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: '#FF7B00',
  },
  logoutContainer: {
    marginTop: 'auto',
    paddingTop: '20px',
  },
  logoutButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#FF7B00',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default MenuPanel;

