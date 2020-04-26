import React from 'react';

function AddMovie (props) {
  return (
    <div className="addMovie">
      <input type="text" className="addMovieInput" placeholder="Add movie title here" onChange={props.handleAddMovie}/>
      <button type="submit" className="buttonAdd" onClick={props.handleAddMovieSubmit}>Add</button>
    </div>
  )
}

export default AddMovie;