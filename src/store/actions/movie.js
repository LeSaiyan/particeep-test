import * as actionTypes from "./actionTypes";

export const initMovies = (moviesList) => {
  return {
    type: actionTypes.INIT_MOVIES,
    movies: moviesList,
  };
};

export const deleteMovie = (id) => {
  return {
    type: actionTypes.DELETE_MOVIE,
    id: id,
  };
};

export const toggleFilter = (filterName) => {
  return {
    type: actionTypes.TOGGLE_FILTER,
    filterName: filterName,
  };
};

export const addLike = (id, like) => {
  return {
    type: actionTypes.ADD_LIKE,
    id: id,
    isLike: like,
  };
};

export const addDislike = (id, dislike) => {
  return {
    type: actionTypes.ADD_DISLIKE,
    id: id,
    isDislike: dislike,
  };
};

export const initCategories = (movieList) => {
  let categories = [];

  movieList.forEach((movie) => {
    if (!categories.includes(movie.category)) {
      categories.push(movie.category);
    }
  });

  return {
    type: actionTypes.INIT_CATEGORIES,
    categories: categories,
  };
};
