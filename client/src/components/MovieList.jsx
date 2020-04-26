import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

function MovieList (props) {
  return (
    <div className="movielist">
     {props.movies.map((movie, index) => {
        return <MovieListEntry key={index} movie={movie}/>
      })}
    </div>
  )
}

export default MovieList;