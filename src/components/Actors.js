import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return (
          <div>
            <h3>{actor.name}</h3>
            <h3>Movies:</h3>
            {actor.movies.map(movie => <ul>{movie}</ul>)}
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
