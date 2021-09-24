import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

function BeerDetails({ match }) {
  const [beerDetails, setBeerDetails] = useState({});

  useEffect(() => {
    async function getBeerDetails() {
      const beerId = match.params.id;
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setBeerDetails(response.data);
    }
    getBeerDetails();
  });

  return (
    <>
      <NavBar />
      <img
        src={beerDetails.image_url}
        alt={beerDetails.name}
        style={{ maxWidth: '150px' }}
      />
      <h2>{beerDetails.name}</h2>
      <p>{beerDetails.tagline}</p>
      <p>{beerDetails.first_brewed}</p>
      <p>{beerDetails.attenuation_level}</p>
      <p>{beerDetails.description}</p>
      <p>{beerDetails.contributed_by}</p>
    </>
  );
}

export default BeerDetails;
