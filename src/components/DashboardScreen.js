import React from 'react';

function DashboardScreen() {
  const stats = [
    { title: 'All Stories', value: 1250, increment: 5.2 },
    { title: 'Stories for Approval', value: 48, increment: -2.3 },
    { title: 'Total Listen Time', value: 3720, increment: 12.7 },
    { title: 'Total Users', value: 15680, increment: 8.1 }
  ];

  const recentStories = [
    { id: 'S001', title: 'The Midnight Echo', author: 'Alice Johnson', date: '2023-10-15' },
    { id: 'S002', title: 'Whispers of the Wind', author: 'David Chen', date: '2023-10-10' },
    { id: 'S003', title: 'Echoes of Eternity', author: 'Sarah Williams', date: '2023-10-20' },
    { id: 'S004', title: 'The Last Lighthouse', author: 'Michael Brown', date: '2023-10-18' },
  ];

  const topStories = [
    { id: 'S005', title: 'Shadows in the Mist', author: 'Emily Davis', listens: 15000 },
    { id: 'S006', title: 'Beyond the Horizon', author: 'Robert Wilson', listens: 12500 },
    { id: 'S007', title: 'Whispers of the Past', author: 'Jennifer Lee', listens: 11000 },
    { id: 'S008', title: 'The Quantum Paradox', author: 'Thomas Anderson', listens: 10500 },
  ];

  const formatValue = (title, value) => {
    if (title === 'Total Listen Time') {
      return `${value} hrs`;
    }
    return value.toLocaleString();
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Dashboard Overview</h2>
      <div style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <div key={index} style={styles.statCard}>
            <h3 style={styles.statTitle}>{stat.title}</h3>
            <p style={styles.statValue}>{formatValue(stat.title, stat.value)}</p>
            <p style={{
              ...styles.statIncrement,
              color: stat.increment >= 0 ? '#4CAF50' : '#F44336'
            }}>
              {stat.increment >= 0 ? '↑' : '↓'} {Math.abs(stat.increment)}%
            </p>
          </div>
        ))}
      </div>
      
      <div style={styles.listsContainer}>
        <div style={styles.listBox}>
          <h3 style={styles.listTitle}>Recent Stories</h3>
          <div style={styles.listContent}>
            {recentStories.map((story) => (
              <div key={story.id} style={styles.listItem}>
                <span style={styles.storyTitle}>{story.title}</span>
                <span style={styles.storyAuthor}>{story.author}</span>
                <span style={styles.storyDate}>{story.date}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div style={styles.listBox}>
          <h3 style={styles.listTitle}>Top Stories</h3>
          <div style={styles.listContent}>
            {topStories.map((story) => (
              <div key={story.id} style={styles.listItem}>
                <span style={styles.storyTitle}>{story.title}</span>
                <span style={styles.storyAuthor}>{story.author}</span>
                <span style={styles.storyListens}>{story.listens.toLocaleString()} listens</span>
              </div>
            ))}
          </div>
        </div>
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
  },
  heading: {
    margin: '0 0 20px 0',
    padding: '10px 0 0 10px',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    padding: '0 10px',
    marginBottom: '30px',
  },
  statCard: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  statTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  statValue: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  statIncrement: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
  listsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    padding: '0 10px',
  },
  listBox: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  listTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  listContent: {
    backgroundColor: '#3C3C3C',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 15px',
    borderBottom: '1px solid #4C4C4C',
  },
  storyTitle: {
    flex: 2,
    fontWeight: 'normal',
    fontSize: '14px',
  },
  storyAuthor: {
    flex: 1,
    textAlign: 'center',
    fontSize: '14px',
  },
  storyDate: {
    flex: 1,
    textAlign: 'right',
    fontSize: '14px',
  },
  storyListens: {
    flex: 1,
    textAlign: 'right',
    fontSize: '14px',
  },
};

export default DashboardScreen;
