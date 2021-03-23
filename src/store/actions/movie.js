import * as actionTypes from "./actionTypes";

export const initMovies = (moviesList) => {
  console.log(moviesList);
  return {
    type: actionTypes.INIT_MOVIES,
    movies: moviesList,
  };
};
