import React from 'react';

function WatchButton (props) {
  return (
      <button className="watchButton" onClick={() => {props.handleWatchedMovieClick(props.movieId)}}>Watched</button>
  )
}

export default WatchButton;
