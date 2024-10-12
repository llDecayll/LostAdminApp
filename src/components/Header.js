import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // Implement your search logic here
  };

  return (
    <header style={styles.header}>
      <form onSubmit={handleSearch} style={styles.searchForm}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
      </form>
      <div style={styles.iconContainer}>
        <span style={styles.icon}><FontAwesomeIcon icon={faBell} /></span>
        <span style={styles.icon}><FontAwesomeIcon icon={faEnvelope} /></span>
        <span style={styles.icon}><FontAwesomeIcon icon={faUser} /></span>
        <span style={styles.icon}><FontAwesomeIcon icon={faCog} /></span>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#1E1E1E',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #333',
  },
  searchForm: {
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    padding: '10px 15px',
    fontSize: '14px',
    border: 'none',
    borderRadius: '20px',
    width: '250px',
    backgroundColor: '#2C2C2C',
    color: '#FFFFFF',
    outline: 'none',
    transition: 'all 0.3s ease',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: '18px',
    marginLeft: '15px',
    cursor: 'pointer',
    color: '#FFFFFF', // This will now affect the icon color
    opacity: 0.7,
    transition: 'all 0.3s ease',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#2C2C2C',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      opacity: 1,
      backgroundColor: '#FF7B00',
    },
  },
};

export default Header;
