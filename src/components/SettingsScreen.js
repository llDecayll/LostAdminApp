import React from 'react';

function SettingsScreen() {
  const settingsOptions = [
    {
      title: "General Settings",
      description: "App name, logo, and branding"
    },
    {
      title: "User Settings",
      description: "Enable/disable user registration"
    },
    {
      title: "Content Settings",
      description: "Upload size limits (audio, image)"
    },
    {
      title: "Notification Settings",
      description: "Email and push notification preferences"
    },
    {
      title: "Monetization Settings",
      description: "Subscription tiers and pricing"
    },
    {
      title: "Transcription & Translation Settings",
      description: "Auto-transcription enable/disable"
    },
    {
      title: "Backup & Security Settings",
      description: "Data backup schedule and frequency"
    },
    {
      title: "API Settings",
      description: "API keys management"
    },
    {
      title: "Permissions & Roles",
      description: "Manage admin roles"
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Settings</h2>
      <div style={styles.settingsContainer}>
        {settingsOptions.map((option, index) => (
          <div key={index} style={styles.settingOption}>
            <div style={styles.optionContent}>
              <h3 style={styles.optionTitle}>{option.title}</h3>
              <p style={styles.optionDescription}>{option.description}</p>
            </div>
            <span style={styles.arrowIcon}>→</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '0',
    color: '#FFFFFF',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    margin: '0 0 10px 0',
    padding: '5px 0',
    width: '100%',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  settingsContainer: {
    backgroundColor: '#2C2C2C',
    borderRadius: '8px',
    padding: '10px',
    width: '80%',
    maxWidth: '600px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  settingOption: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '10px 15px',
    borderRadius: '5px',
    backgroundColor: '#3C3C3C',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#4C4C4C',
    },
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '2px',
  },
  optionDescription: {
    fontSize: '12px',
    color: '#B0B0B0',
    margin: 0,
  },
  arrowIcon: {
    fontSize: '20px',
    marginLeft: '10px',
  },
};

export default SettingsScreen;
