import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map(director => {
        return (
          <div>
            <h3>{director.name}</h3>
            <h3>Movies:</h3>
            {director.movies.map(movie => <ul>{movie}</ul>)}
          </div>
        )
      })}
    </div>
  );
}

export default Directors
