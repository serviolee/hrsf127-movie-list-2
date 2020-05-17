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
      allMovies: [],
      clickedMovie: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleAddMovieSubmit = this.handleAddMovieSubmit.bind(this);
    this.handleWatchedMovieClick = this.handleWatchedMovieClick.bind(this);
    this.handleMovieBeenWatched = this.handleMovieBeenWatched.bind(this);
    this.handleMovieToWatch = this.handleMovieToWatch.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.postMovie = this.postMovie.bind(this);
    this.handleMovieClick = this.handleMovieClick.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  handleChange(e) {
    // console.log('handleChange');
    let searchValue = e.target.value;
    // console.log(this.state.searchValue);
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
    let encoded = encodeURI(targetValue);

    // moviesArray.forEach((movie) => {
    //   if(movie.title.toLowerCase().indexOf(targetValue.toLowerCase()) === -1){
    //     return;
    //   }
    //   tempMoviesArray.push(movie);
    // });
    // this.setState({
    //   foundMovies: tempMoviesArray,
    //   searchedList: true
    // }, () => {console.log(this.state.foundMovies)}
    // )

    // search function to api
    axios.get(`http://api.themoviedb.org/3/search/company?api_key=76f750408b5c773b15b68e3814edc832&query=${encoded}`)
      .then((response) => {
        console.log(response.data.results);
        let movies = response.data.results.map((movie) => {
          return {
            title: movie.name,
            movie_id: movie.id,
            isWatched: false
          }
        })
        this.setState({
          foundMovies: movies,
          searchedList: true
        })
      })
      .catch((err) => {
        console.log(err);
      })
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
    let copyOfMovies = [...this.state.allMovies];
    copyOfMovies.push(movie);
    console.log(copyOfMovies);
    this.setState({
      allMovies: copyOfMovies
    })
  }

  handleWatchedMovieClick(movieId) {
    // console.log(movieId);
    let copyOfMovies = [...this.state.allMovies];
    copyOfMovies.forEach((movie) => {
      if (movie.id === movieId) {
        movie.isWatched = 1;
      }
    })
    this.setState({
      allMoviess: copyOfMovies
    }, () => {console.log(this.state.allMovies)})
  }

  handleMovieBeenWatched() {
    const movieBeenWatched = this.state.allMovies.filter((movie) => {
      return movie.isWatched === 1;
    })
    this.setState({
       movies: movieBeenWatched
    })
  }

  handleMovieToWatch() {
    const movieBeenWatched = this.state.allMovies.filter((movie) => {
      return movie.isWatched === 0;
    })
    this.setState({
       movies: movieBeenWatched
    })
  }

  getMovies() {
    // axios.get('/api/movies')
    //   .then((response) => {
    //     this.setState({
    //       movies: response.data,
    //       allMovies: response.data
    //     }, () => {console.log(response.data)});
    //   })
      axios.get('https://api.themoviedb.org/3/movie/550?api_key=76f750408b5c773b15b68e3814edc832')
        .then((response) => {
          console.log(response.data);
          let data = response.data;
          let movie = {
            year: data.release_date,
            title: data.title,
            runtime: data.runtime,
            imdbRating: data.vote_average,
            isWatched: false
          }
          // let movies = this.state.movies;
          // movies.push(movie);

          this.setState({
            movies: [...this.state.movies, movie] //spread out state.movies into new array, and then concantenate movie to state.movies
          })
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

  handleMovieClick(id) {
    console.log('handle movie click');
    console.log(id);
  }

  render() {
    return (
      <div className="app">
        <h1 className="heading">Movie List</h1>
        <AddMovie handleAddMovie={this.handleAddMovie} handleAddMovieSubmit={this.handleAddMovieSubmit}/>
        <Search searchValue={this.state.searchValue}  handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleMovieBeenWatched={this.handleMovieBeenWatched} handleMovieToWatch={this.handleMovieToWatch}/>
        <MovieList movies={this.state.movies} foundMovies={this.state.foundMovies} searchedList={this.state.searchedList} handleWatchedMovieClick={this.handleWatchedMovieClick} handleMovieClick={this.handleMovieClick}/>
      </div>
    )
  }
}

export default App;