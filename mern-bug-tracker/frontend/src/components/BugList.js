import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BugItem from './BugItem';

const BugList = () => {
  const [bugs, setBugs] = useState([]);
  const [error, setError] = useState('');

  const fetchBugs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/bugs');
      setBugs(res.data);
    } catch (err) {
      setError('Error fetching bugs');
      console.error('BugList Error:', err);
    }
  };

  useEffect(() => {
    fetchBugs();

    // Listen for custom event to update bug list
    window.addEventListener('bugUpdated', fetchBugs);
    return () => window.removeEventListener('bugUpdated', fetchBugs);
  }, []);

  return (
    <div>
      <h2>Bug List</h2>
      {error && <p>{error}</p>}
      {bugs.length === 0 ? (
        <p>No bugs reported.</p>
      ) : (
        bugs.map((bug) => <BugItem key={bug._id} bug={bug} refreshBugs={fetchBugs} />)
      )}
    </div>
  );
};

export default BugList;
