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
        {this.props.movie.title}
        <WatchButton movieId={this.props.movie.id} handleWatchedMovieClick={this.props.handleWatchedMovieClick}/>
      </div>
    )
  }
}

export default MovieListEntry;