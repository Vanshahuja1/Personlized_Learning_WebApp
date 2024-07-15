// src/pages/Learning.js
import React, { useState } from 'react';
import { generateLearningPath } from './api';
import './Learning.css';

const Learning = () => {
  const [domain, setDomain] = useState('');
  const [level, setLevel] = useState('');
  const [description, setDescription] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await generateLearningPath(domain, level, description);
      setOutput(result);
    } catch (error) {
      setOutput('An error occurred while fetching the learning path.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="learning-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="domain">Domain:</label>
            <input
              type="text"
              id="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="level">Level:</label>
            <select id="level" value={level} onChange={(e) => setLevel(e.target.value)} required>
              <option value="">Select level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Generate Learning Path</button>
        </form>
      </div>
      <div className="output-container">
        {loading ? <p>Loading...</p> : <p>{output ? output : 'Enter the details to generate a learning path.'}</p>}
      </div>
    </div>
  );
};

export default Learning;
