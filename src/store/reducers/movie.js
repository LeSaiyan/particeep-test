import * as actionTypes from "../actions/actionTypes";

const initialState = {
  movies: null,
  categories: [],
  filters: [],
};

const initMovies = (state, action) => {
  return {
    ...state,
    movies: action.movies,
  };
};

const initCategories = (state, action) => {
  return {
    ...state,
    categories: action.categories,
  };
};

const toggleFilter = (state, action) => {
  const filters = [...state.filters];
  const indexFilter = state.filters.findIndex(
    (filter) => filter === action.filterName
  );

  console.log(action.filterName);

  if (!indexFilter[0] >= 0) {
    filters.push(action.filterName);
  } else {
    filters.slice(indexFilter, indexFilter);
  }

  console.log(filters);
  return {
    ...state,
    // categories: action.categories,
  };
};

const deleteMovie = (state, action) => {
  const movies = [...state.movies];

  const updatedMovies = movies.filter((movie) => movie.id !== action.id);

  return {
    ...state,
    movies: updatedMovies,
  };
};

const addLike = (state, action) => {
  const movies = [...state.movies];

  const indexMovie = state.movies.findIndex((movie) => movie.id === action.id);

  if (action.isLike) {
    movies[indexMovie].likes = movies[indexMovie].likes + 1;
  } else {
    movies[indexMovie].likes = movies[indexMovie].likes - 1;
  }

  return {
    ...state,
    movies: movies,
  };
};

const addDislike = (state, action) => {
  const movies = [...state.movies];

  const indexMovie = state.movies.findIndex((movie) => movie.id === action.id);

  if (action.isDislike) {
    movies[indexMovie].dislikes = movies[indexMovie].dislikes + 1;
  } else {
    movies[indexMovie].dislikes = movies[indexMovie].dislikes - 1;
  }

  console.log(movies);

  return {
    ...state,
    movies: movies,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_MOVIES:
      return initMovies(state, action);
    case actionTypes.DELETE_MOVIE:
      return deleteMovie(state, action);
    case actionTypes.ADD_LIKE:
      return addLike(state, action);
    case actionTypes.ADD_DISLIKE:
      return addDislike(state, action);
    case actionTypes.INIT_CATEGORIES:
      return initCategories(state, action);
    case actionTypes.TOGGLE_FILTER:
      return toggleFilter(state, action);
    default:
      return state;
  }
};

export default reducer;
