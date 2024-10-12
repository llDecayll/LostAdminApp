import React from 'react';

function StoriesScreen() {
  const stories = [
    {
      storyId: "S001",
      title: "The Midnight Echo",
      creator: "Alice Johnson",
      category: "Mystery",
      createdOn: "2023-10-15",
      status: "Published",
      tags: ["suspense", "detective"]
    },
    {
      storyId: "S002",
      title: "Whispers of the Wind",
      creator: "David Chen",
      category: "Fantasy",
      createdOn: "2023-10-10",
      status: "Draft",
      tags: ["magic", "adventure"]
    },
    {
      storyId: "S003",
      title: "Echoes of Eternity",
      creator: "Sarah Williams",
      category: "Science Fiction",
      createdOn: "2023-10-20",
      status: "Published",
      tags: ["space", "time-travel"]
    },
    {
      storyId: "S004",
      title: "The Last Lighthouse",
      creator: "Michael Brown",
      category: "Adventure",
      createdOn: "2023-10-18",
      status: "Draft",
      tags: ["sea", "historical"]
    },
    {
      storyId: "S005",
      title: "Shadows in the Mist",
      creator: "Emily Davis",
      category: "Horror",
      createdOn: "2023-10-25",
      status: "Published",
      tags: ["supernatural", "psychological"]
    },
    {
      storyId: "S006",
      title: "Beyond the Horizon",
      creator: "Robert Wilson",
      category: "Science Fiction",
      createdOn: "2023-10-22",
      status: "Draft",
      tags: ["aliens", "exploration"]
    },
    {
      storyId: "S007",
      title: "Whispers of the Past",
      creator: "Jennifer Lee",
      category: "Historical Fiction",
      createdOn: "2023-10-28",
      status: "Published",
      tags: ["romance", "war"]
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>List of Stories</h2>
      <div style={styles.frame}>
        <div style={styles.headerRow}>
          <span style={styles.headerCell}>Story ID</span>
          <span style={styles.headerCell}>Title</span>
          <span style={styles.headerCell}>Creator</span>
          <span style={styles.headerCell}>Category</span>
          <span style={styles.headerCell}>Created On</span>
          <span style={styles.headerCell}>Tags</span>
          <span style={styles.headerCell}>Status</span>
        </div>
        {stories.map((story, index) => (
          <div key={index} style={styles.divWrapper}>
            <span style={styles.textWrapper}>{story.storyId}</span>
            <span style={styles.textWrapper}>{story.title}</span>
            <span style={styles.textWrapper}>{story.creator}</span>
            <span style={styles.textWrapper}>{story.category}</span>
            <span style={styles.textWrapper}>{story.createdOn}</span>
            <span style={styles.textWrapper}>{story.tags.join(', ')}</span>
            <span style={{
              ...styles.textWrapper,
              ...styles.status,
              backgroundColor: story.status === 'Published' ? '#4CAF50' : '#FFA500'
            }}>
              {story.status}
            </span>
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
  },
  heading: {
    margin: '0 0 10px 0',
    padding: '10px 0 0 10px',
  },
  frame: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '4px',
    position: 'relative',
    width: '100%',
    flex: 1,
    overflow: 'auto',
  },
  headerRow: {
    display: 'flex',
    height: '40px',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    padding: '5px 10px',
    position: 'sticky',
    top: 0,
    alignSelf: 'stretch',
    width: '100%',
    backgroundColor: '#2C2C2C',
    fontWeight: 'bold',
    zIndex: 1,
  },
  headerCell: {
    flex: 1,
    fontSize: '14px',
    color: '#FFFFFF',
  },
  divWrapper: {
    display: 'flex',
    height: '40px',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    padding: '5px 10px',
    position: 'relative',
    alignSelf: 'stretch',
    width: '100%',
    backgroundColor: '#3c3c3c',
  },
  textWrapper: {
    position: 'relative',
    flex: 1,
    fontFamily: '"Helvetica-Regular", Helvetica',
    fontWeight: 400,
    color: '#ffffff',
    fontSize: '14px',
    letterSpacing: 0,
    lineHeight: '18px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
  },
  status: {
    padding: '2px 6px',
    borderRadius: '10px',
    fontSize: '0.8em',
    fontWeight: 'bold',
    maxWidth: '70px',
    textAlign: 'center',
  },
};

export default StoriesScreen;
