import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar';

function NewBeer() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState('');
  const [contributedBy, setContributedBy] = useState('');
  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy,
    };
    await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body);
  };

  return (
    <>
      <NavBar />
      <h3>Create a Beer</h3>
      <form onSubmit={handleFormSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Tagline</label>
        <input
          type="text"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
          required
        />

        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>First Brewed</label>
        <input
          type="text"
          value={firstBrewed}
          onChange={(e) => setFirstBrewed(e.target.value)}
          required
        />

        <label>Brewers Tips</label>
        <input
          type="text"
          value={brewersTips}
          onChange={(e) => setBrewersTips(e.target.value)}
          required
        />

        <label>Attenuation Level</label>
        <input
          type="number"
          value={attenuationLevel}
          onChange={(e) => setAttenuationLevel(e.target.value)}
          required
        />

        <label>Contributed By</label>
        <input
          type="text"
          value={contributedBy}
          onChange={(e) => setContributedBy(e.target.value)}
          required
        />

        <button type="submit">Create a New Beer</button>
      </form>
    </>
  );
}

export default NewBeer;
