import React from 'react';

function MovieListEntry (props) {
  return (
    <div className="movielistentry">
      {props.movie.title}
    </div>
  )
}

export default MovieListEntry;