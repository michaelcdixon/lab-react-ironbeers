import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

function RandomBeer() {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    async function getBeer() {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      setBeer(response.data);
    }
    getBeer();
  }, []);

  return (
    <>
      <NavBar />
      <img src={beer.image_url} alt={beer.name} style={{ maxWidth: '150px' }} />
      <h3>{beer.name}</h3>
      <p>{beer.tagline}</p>
      <p>{beer.first_brewed}</p>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </>
  );
}
export default RandomBeer;
