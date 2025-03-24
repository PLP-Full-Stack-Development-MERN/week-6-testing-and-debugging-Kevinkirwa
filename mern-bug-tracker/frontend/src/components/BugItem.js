import React from 'react';
import axios from 'axios';

const BugItem = ({ bug, refreshBugs }) => {
  const handleStatusChange = async (newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/bugs/${bug._id}`, { status: newStatus });
      refreshBugs();
    } catch (err) {
      console.error('BugItem Update Error:', err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/bugs/${bug._id}`);
      refreshBugs();
    } catch (err) {
      console.error('BugItem Delete Error:', err);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h3>{bug.title}</h3>
      <p>{bug.description}</p>
      <p>Status: {bug.status}</p>
      <button onClick={() => handleStatusChange('in-progress')}>Set In-Progress</button>
      <button onClick={() => handleStatusChange('resolved')}>Set Resolved</button>
      <button onClick={handleDelete}>Delete Bug</button>
    </div>
  );
};

export default BugItem;
