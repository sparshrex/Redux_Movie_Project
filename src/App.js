import React from "react";
import { data } from "./data";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import { addMovies,setShowFavourites } from "./actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      console.log("Update");
      this.forceUpdate();
    });

    store.dispatch(addMovies(data));

    console.log("state", this.props.store.getState());
  }
  isMovieFavourite = (movie) =>{
    const {favourites} = this.props.store.getState();

    const index = favourites.indexOf(movie);

    if(index!==-1)
    {
        //found the movie
      return true;

    }

    return false;
  }
onChangeTab = (val)=>{
  this.props.store.dispatch(setShowFavourites(val));
}

  render() {
    const { list,favourites,showFavourites } = this.props.store.getState();  
    console.log("Render",this.props.store.getState());

    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movie</div>
            <div className={`tab ${showFavourites ?  'active-tabs' : ''}`} onClick={()=>this.onChangeTab(true)}>Favourites</div>
          
          </div>

          <div className="list">
            { displayMovies.map((movie,index) => (
              <MovieCard movie={movie} key={`movies-${index}`}  dispatch = {this.props.store.dispatch}  isFavourite={this.isMovieFavourite(movie)} />
            ))}
          </div>

          {displayMovies.length ===0 ? <div className="no-movie"> No Moives to display </div>:null}
        </div>
      </div>
    );
  }
}

export default App;
