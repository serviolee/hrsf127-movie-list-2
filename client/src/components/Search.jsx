import React from 'react';

function Search (props) {
  return (
    <div className="search">
      Search <input className="searchInput" type="text" value={props.searchValue} onChange={props.handleChange}/>
      <button type="submit" onClick={props.handleSubmit}>Submit</button>
    </div>
  )
}

export default Search;