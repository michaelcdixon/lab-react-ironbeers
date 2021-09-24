import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Home() {
  return (
    <div className="App">
      <img src="/assets/beers.png" alt="beers" />
      <NavLink activeStyle={{ color: 'red' }} exact to="/beers">
        All Beers
      </NavLink>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
        accusantium at tenetur accusamus aut cum omnis aspernatur quisquam?
        Asperiores amet neque distinctio voluptates atque id nemo eligendi rerum
        exercitationem vel? Asperiores architecto quaerat in sed, reiciendis id
        atque at. Molestiae, quae. Natus veniam corrupti quia dicta dignissimos
        quod, rerum harum placeat, eligendi at corporis, voluptatibus dolorum
        modi esse exercitationem? Officiis!
      </p>
      <img src="/assets/random-beer.png" alt="random-beer" />
      <NavLink activeStyle={{ color: 'red' }} exact to="/randombeer">
        Random Beer
      </NavLink>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
        accusantium at tenetur accusamus aut cum omnis aspernatur quisquam?
        Asperiores amet neque distinctio voluptates atque id nemo eligendi rerum
        exercitationem vel? Asperiores architecto quaerat in sed, reiciendis id
        atque at. Molestiae, quae. Natus veniam corrupti quia dicta dignissimos
        quod, rerum harum placeat, eligendi at corporis, voluptatibus dolorum
        modi esse exercitationem? Officiis!
      </p>
      <img src="/assets/new-beer.png" alt="new-beer" />
      <NavLink activeStyle={{ color: 'red' }} exact to="/newbeer">
        New Beer
      </NavLink>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
        accusantium at tenetur accusamus aut cum omnis aspernatur quisquam?
        Asperiores amet neque distinctio voluptates atque id nemo eligendi rerum
        exercitationem vel? Asperiores architecto quaerat in sed, reiciendis id
        atque at. Molestiae, quae. Natus veniam corrupti quia dicta dignissimos
        quod, rerum harum placeat, eligendi at corporis, voluptatibus dolorum
        modi esse exercitationem? Officiis!
      </p>
    </div>
  );
}

export default Home;
