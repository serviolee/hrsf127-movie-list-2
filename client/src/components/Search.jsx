import React from 'react';

function Search (props) {
  return (
    <div className="search">
      <input className="searchInput" type="text" value={props.searchValue} onChange={props.handleChange} placeholder="Search..."/>
      <button type="submit" onClick={props.handleSubmit}>Go!</button>
    </div>
  )
}

export default Search;