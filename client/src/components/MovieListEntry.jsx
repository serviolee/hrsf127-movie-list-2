import React from 'react';
import WatchButton from './WatchButton.jsx';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: false
    }
    this.handleWatchedMovieClick = this.handleWatchedMovieClick.bind(this)
  }

  handleWatchedMovieClick(movieId) {
    console.log(movieId);
    this.setState({
      watched: true
    }, () => {console.log(this.state.watched)})
  }

  render() {
    return (
      <div className="movielistentry">
        {this.props.movie.title}
        <WatchButton movieId={this.props.movie.id} handleWatchedMovieClick={this.handleWatchedMovieClick}/>
      </div>
    )
  }
}

export default MovieListEntry;