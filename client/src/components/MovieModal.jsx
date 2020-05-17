import React from 'react';

const MovieModal = (props) => {
  return (
    <div className="movielist">
      {props.movieToDisplay.name}
    </div>
  )
}

export default MovieModal;