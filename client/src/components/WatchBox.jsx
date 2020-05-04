import React from 'react';

function WatchBox (props) {
  return (
    <div className="watchBox-container">
      <button className="buttonWatched" onClick={props.handleMovieBeenWatched}>Watched</button>
      <button className="buttonToWatch" onClick={props.handleMovieToWatch}>To Watch</button>
    </div>
  )
}

export default WatchBox;