import React, { useState, useEffect } from 'react';
import { getDevelopers } from '../redux/api'; 

const DevelopersList = () => {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const data = await getDevelopers(); 
        setDevelopers(data); 
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDevelopers();
  }, []);

  if (loading) return <div>Yuklanmoqda...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Developers Ro'yxati</h1>
      <ul>
        {developers.map((developer) => (
          <li key={developer.id}>{developer.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DevelopersList;
