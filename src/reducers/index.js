import { ADD_MOVIES, ADD_FAVOURITE,REMOVE_FAVOURITE, SET_SHOW_FAVOURITE } from "../actions";

const initialMovieState = {
  list: [],
  favourites: [],
  showFavourites: false
};

export default function movies(state = initialMovieState, action) {
  //   if (action.type === ADD_MOVIES) {
  //     return {
  //         ...state,
  //         list:action.movies
  //     };
  //   }

  //   return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movies, ...state.favourites],
      };
    case REMOVE_FAVOURITE:
        const filteredArray = state.favourites.filter(
            movies => movies.Title !== action.movies.Title
        )
      return {
        ...state,
        favourites: filteredArray,
      };
      case SET_SHOW_FAVOURITE:
        return{
            ...state,
            showFavourites:action.val
        }

    default:
      return state;
  }
}
