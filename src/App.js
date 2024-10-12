import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      {!isAuthenticated ? (
        <LoginScreen onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <HomeScreen />
      )}
    </div>
  );
}

export default App;
