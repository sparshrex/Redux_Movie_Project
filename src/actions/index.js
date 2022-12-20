// // {
// //     type: 'ADD_MOVIES',
//     movies:  [m1,m2,m3]
// }

// {
//     type: 'DECREASE_COUNT'

// }

//action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SET_SHOW_FAVOURITE = "SET_SHOW_FAVOURITE";

//action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
export function addfavourite(movies) {
  return {
    type: ADD_FAVOURITE,
    movies,
  };
}
export function removefavourite(movies) {
    
  return {
    type: REMOVE_FAVOURITE,
    movies,
  };
}
export function setShowFavourites(val) {
    
  return {
    type: SET_SHOW_FAVOURITE,
    val,
  };
}
