import React from 'react';

function UsersScreen() {
  const users = [
    {
      userId: "U001",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      createdBy: "System",
      status: "Active"
    },
    {
      userId: "U002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Editor",
      createdBy: "John Doe",
      status: "Active"
    },
    {
      userId: "U003",
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      role: "Viewer",
      createdBy: "Jane Smith",
      status: "Inactive"
    },
    {
      userId: "U004",
      name: "Alice Brown",
      email: "alice.brown@example.com",
      role: "Editor",
      createdBy: "John Doe",
      status: "Active"
    },
    {
      userId: "U005",
      name: "Charlie Wilson",
      email: "charlie.wilson@example.com",
      role: "Viewer",
      createdBy: "System",
      status: "Pending"
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>List of Users</h2>
      <div style={styles.frame}>
        <div style={styles.headerRow}>
          <span style={styles.headerCell}>User ID</span>
          <span style={styles.headerCell}>Name</span>
          <span style={styles.headerCell}>Email</span>
          <span style={styles.headerCell}>Role</span>
          <span style={styles.headerCell}>Created By</span>
          <span style={styles.headerCell}>Status</span>
        </div>
        {users.map((user, index) => (
          <div key={index} style={styles.divWrapper}>
            <span style={styles.textWrapper}>{user.userId}</span>
            <span style={styles.textWrapper}>{user.name}</span>
            <span style={styles.textWrapper}>{user.email}</span>
            <span style={styles.textWrapper}>{user.role}</span>
            <span style={styles.textWrapper}>{user.createdBy}</span>
            <span style={{
              ...styles.textWrapper,
              ...styles.status,
              backgroundColor: user.status === 'Active' ? '#4CAF50' : user.status === 'Inactive' ? '#F44336' : '#FFA500'
            }}>
              {user.status}
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

export default UsersScreen;
