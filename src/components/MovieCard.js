import React from 'react'
import { addfavourite ,removefavourite} from '../actions';

class MovieCard extends React.Component{

    handleFavouriteClick = ()=>{
    const {movie} = this.props;
    this.props.dispatch(addfavourite(movie));
  }
    handleUnFavouriteClick = ()=>{
    const {movie} = this.props;
    this.props.dispatch(removefavourite(movie));
  }
render(){
  const {movie,isFavourite} = this.props;
  return (
            <div className='movie-card'>
            <div className='left'>
            <img src={movie.Poster}  alt="movie-poster"/>
            </div>
            <div className='right'>
            <div  className='title'>{movie.Title}</div>
            <div className='plot'> {movie.Plot} </div>
            <div className='footer'>
                <div className='rating'> {movie.imdbRating}</div>
                {
                  isFavourite
                  ? <button className='unfavourite-btn'  onClick={this.handleUnFavouriteClick}>UnFavourite</button>:
                  <button className='favourite-btn'  onClick={this.handleFavouriteClick}>Favourite</button>
                }

            </div>
            </div>
      
    </div>
  );
 }
}

export default MovieCard;
