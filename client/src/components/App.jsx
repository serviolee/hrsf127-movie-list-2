import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import mockMovieData from '../../../mockMovieData.js';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: mockMovieData,
      searchValue: '',
      foundMovies: [],
      searchedList: false,
      movieToAdd: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleAddMovieSubmit = this.handleAddMovieSubmit.bind(this);
  }

  componentDidMount() {
    this.getMovies();
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
    let targetValue  = this.state.searchValue;
    let moviesArray = this.state.movies;
    let tempMoviesArray = [];
    for (let i = 0; i < moviesArray.length; i++) {
      if (targetValue.toLowerCase() === moviesArray[i].title.toLowerCase()) {
        tempMoviesArray.push(moviesArray[i]);
      }
    }
    this.setState({
      foundMovies: tempMoviesArray,
      searchedList: true
    }, () => {console.log(this.state.foundMovies)}
    )
  }

  handleAddMovie(e) {
    e.preventDefault();
    let movieToAdd = e.target.value; // 'hackers'
    this.setState({
      movieToAdd: movieToAdd
    })
  }

  handleAddMovieSubmit(e) {
    let movie = {title: this.state.movieToAdd}; // {title: hackers}
    let copyOfMovies = [...this.state.movies];
    copyOfMovies.push(movie);
    console.log(copyOfMovies);
    this.setState({
      movies: copyOfMovies
    })
  }

  getMovies() {
    axios.get('/api/movies')
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(err) {
        console.log('error for getMovies request: ', err);
      })
  }

  render() {
    return (
      <div className="app">
        <h1 className="heading">Movie List</h1>
        <AddMovie handleAddMovie={this.handleAddMovie} handleAddMovieSubmit={this.handleAddMovieSubmit}/>
        <Search searchValue={this.state.searchValue}  handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <MovieList movies={this.state.movies} foundMovies={this.state.foundMovies} searchedList={this.state.searchedList}/>
      </div>
    )
  }
}

export default App;