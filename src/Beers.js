import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './NavBar';
import { NavLink } from 'react-router-dom';

function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function getBeers() {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      setBeers(response.data);
    }
    getBeers();
  }, []);

  return (
    <>
      <Navbar />
      <ul>
        {beers.map((beer, index) => {
          return (
            <>
              <div key={index}>
                <NavLink to={`beers/${beer._id}`}>{beer.name}</NavLink>
                <li>{beer.tagline}</li>
                <img
                  style={{ maxWidth: '150px' }}
                  src={beer.image_url}
                  alt={beer.name}
                />
                <hr />
              </div>
            </>
          );
        })}
        {/* <img src={beers.image_url} alt={beers.name} /> */}
      </ul>
    </>
  );
}

export default Beers;
