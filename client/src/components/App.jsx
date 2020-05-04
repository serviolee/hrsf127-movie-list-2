import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import WatchBox from './WatchBox.jsx';
import mockMovieData from '../../../mockMovieData.js';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchValue: '',
      foundMovies: [],
      searchedList: false,
      movieToAdd: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleAddMovieSubmit = this.handleAddMovieSubmit.bind(this);
    this.handleWatchedMovieClick = this.handleWatchedMovieClick.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.postMovie = this.postMovie.bind(this);
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
    }, () => this.postMovie)
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

  handleWatchedMovieClick(movieId) {
    console.log(movieId);
    // make a copy of movies array
    // iterate thru the array and check if id matches
    // change isWatched property on found element to true
    // use setState to overwrite movie value with copied array
    let copyOfMovies = [...this.state.movies];
    copyOfMovies.forEach((movie) => {
      if (movie.id === movieId) {
        movie.isWatched = 1;
      }
    })
    this.setState({
      movies: copyOfMovies
    }, () => {console.log(this.state.movies)})
  }

  getMovies() {
    axios.get('/api/movies')
      .then((response) => {
        this.setState({
          movies: response.data
        }, () => {console.log(response.data)});
      })
      .catch(function(err) {
        console.log('error for getMovies request: ', err);
      })
  }

  postMovie() {
    axios.post('/api/movie', {
      title: this.state.movieToAdd,
      overview: "description of movie",
      release_date: "1999",
      isWatched: false
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(err) {
      console.log('error from postMovie: ', err);
    })
  }

  render() {
    return (
      <div className="app">
        <h1 className="heading">Movie List</h1>
        <AddMovie handleAddMovie={this.handleAddMovie} handleAddMovieSubmit={this.handleAddMovieSubmit}/>
        <Search searchValue={this.state.searchValue}  handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <MovieList movies={this.state.movies} foundMovies={this.state.foundMovies} searchedList={this.state.searchedList} handleWatchedMovieClick={this.handleWatchedMovieClick}/>
      </div>
    )
  }
}

export default App;