import React, { useState } from 'react';
import axios from 'axios';

const BugForm = () => {
  const [bug, setBug] = useState({ title: '', description: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setBug({ ...bug, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/bugs', bug);
      setMessage('Bug reported successfully.');
      setBug({ title: '', description: '' });
      window.dispatchEvent(new Event('bugUpdated')); // trigger update event for BugList
    } catch (error) {
      setMessage('Error reporting bug.');
      console.error('BugForm Error:', error);
    }
  };

  return (
    <div>
      <h2>Report a Bug</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Bug Title"
          value={bug.title}
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          name="description"
          placeholder="Bug Description"
          value={bug.description}
          onChange={handleChange}
          required
        ></textarea>
        <br />
        <button type="submit">Submit Bug</button>
      </form>
    </div>
  );
};

export default BugForm;
