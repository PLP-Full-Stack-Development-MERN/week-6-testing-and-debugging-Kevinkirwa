import React from 'react';
import BugList from './components/BugList';
import BugForm from './components/BugForm';

function App() {
  return (
    <div className="App">
      <h1>MERN Bug Tracker</h1>
      <BugForm />
      <BugList />
    </div>
  );
}

export default App;
