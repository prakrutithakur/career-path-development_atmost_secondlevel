import React, { useEffect } from 'react';
import './App.css';
import MainScreen from './Dashboards';

function App() {
  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextmenu);
    return function cleanup() {
      document.removeEventListener('contextmenu', handleContextmenu);
    };
  }, []);

  return (
    <div className="App">
      <MainScreen />
    </div>
  );
}

export default App;
