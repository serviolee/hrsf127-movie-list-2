import React from 'react';
import WatchButton from './WatchButton.jsx';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    return (
      <div className="movielistentry">
        <span className="movie-title" onClick={this.props.handleMovieClick}>{this.props.movie.title}</span>
        <WatchButton movieId={this.props.movie.id} handleWatchedMovieClick={this.props.handleWatchedMovieClick} />
      </div>
    )
  }
}

export default MovieListEntry;