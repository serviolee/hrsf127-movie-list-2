import React from 'react';
import WatchBox from './WatchBox.jsx';

function Search (props) {
  return (
    <div className="search">
      <WatchBox handleMovieBeenWatched={props.handleMovieBeenWatched} handleMovieToWatch={props.handleMovieToWatch}/>
      <input className="searchInput" type="text" value={props.searchValue} onChange={props.handleChange} placeholder="Search..."/>
      <button type="submit" onClick={props.handleSubmit}>Go!</button>
    </div>
  )
}

export default Search;