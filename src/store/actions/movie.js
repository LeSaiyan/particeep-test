import * as actionTypes from "./actionTypes";
import { movies$ } from "../../movies";

const getMoviesRequest = () => {
  return movies$;
};

export const getMovies = () => {
  return (dispatch) => {
    getMoviesRequest().then((res) => {
      dispatch(initMovies(res));
      dispatch(initCategories(res));
    });
  };
};

export const initMovies = (moviesList) => {
  return {
    type: actionTypes.INIT_MOVIES,
    movies: moviesList,
  };
};

export const getMoviesToShow = () => {
  return {
    type: actionTypes.GET_MOVIE_TO_SHOW,
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

export const toggleFilter = (filterArray) => {
  return {
    type: actionTypes.TOGGLE_FILTER,
    filterArray: filterArray,
  };
};

export const deleteMovie = (id) => {
  return {
    type: actionTypes.DELETE_MOVIE,
    id: id,
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

export const changePage = (action) => {
  return (dispatch) => {
    dispatch(nextPage(action));
    dispatch(getMoviesToShow());
  };
};

export const nextPage = (action) => {
  return {
    type: actionTypes.CHANGE_PAGE,
    action: action,
  };
};

export const changeItemPerPage = (action) => {
  return {
    type: actionTypes.CHANGE_ITEM_PER_PAGE,
    itemPerPage: action,
  };
};
