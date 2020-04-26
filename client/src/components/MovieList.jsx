import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

function MovieList (props) {
  if (props.foundMovies.length === 0 && props.searchedList === true) {
    return (
      <div>
        No Movies Found
      </div>
    )
  } else if (props.foundMovies.length !== 0) {
    return (
      <div>
        {props.foundMovies.map((movie, index) => {
        return <MovieListEntry key={index} movie={movie}/>
        })}
      </div>
    )
  } else {
    return (
      <div className="movielist">
      {props.movies.map((movie, index) => {
          return <MovieListEntry key={index} movie={movie}/>
        })}
      </div>
    )
  }
}

export default MovieList;