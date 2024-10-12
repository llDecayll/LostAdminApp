// components/HomeScreen.js
import React, { useState } from 'react';
import MenuPanel from './MenuPanel';
import Header from './Header';
import DashboardScreen from './DashboardScreen';
import UsersScreen from './UsersScreen';
import StoriesScreen from './StoriesScreen';
import SettingsScreen from './SettingsScreen';
import LogoutPopup from './LogoutPopup'; // We'll create this component next

function HomeScreen() {
  const [selectedMenu, setSelectedMenu] = useState('dashboard');
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogout = () => {
    setShowLogoutPopup(true);
  };

  const confirmLogout = () => {
    // Implement actual logout logic here
    console.log('Logging out...');
    setShowLogoutPopup(false);
  };

  const cancelLogout = () => {
    setShowLogoutPopup(false);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case 'dashboard':
        return <DashboardScreen />;
      case 'users':
        return <UsersScreen />;
      case 'stories':
        return <StoriesScreen />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <DashboardScreen />;
    }
  };

  return (
    <div style={styles.container}>
      <MenuPanel
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
        onLogout={handleLogout}
      />
      <div style={styles.mainContent}>
        <Header />
        <div style={styles.content}>
          {renderContent()}
        </div>
      </div>
      {showLogoutPopup && (
        <LogoutPopup onConfirm={confirmLogout} onCancel={cancelLogout} />
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#121212',
    color: '#FFFFFF',
    overflow: 'hidden',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    padding: '20px',
    overflow: 'auto',
  },
};

export default HomeScreen;
