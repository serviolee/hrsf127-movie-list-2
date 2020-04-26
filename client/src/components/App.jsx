import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import Search from './Search.jsx';
import mockMovieData from '../../../mockMovieData.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: mockMovieData,
      searchValue: '',
      foundMovies: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // console.log('handleChange');
    let searchValue = e.target.value;
    console.log(this.state.searchValue);
    this.setState({
      searchValue: searchValue
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log('submit');
    let targetValue = this.state.searchValue;
    // iterate over this.state.movies
    // check if target value matches element title
    // return and render titles
    // or display no movie found
    let moviesArray = this.state.movies;
    for (let i = 0; i < moviesArray; i++) {
      if (targetValue === moviesArray[i].title) {
        this.state.foundMovies.push(moviesArray[i]);
      }
    }
  }

  render() {
    return (
      <div className="app">
        <h1 className="heading">Movie List</h1>
        <Search searchValue={this.state.searchValue} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }
}

export default App;