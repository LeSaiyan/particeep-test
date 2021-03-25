import * as actionTypes from "../actions/actionTypes";

const initialState = {
  allMovies: [],
  movies: null,
  categories: [],
  filters: [],
  itemPerPage: 4,
  pageNumber: 1,
  lastPage: null,
};

const paginate = (array, pageSize, pageNumber) => {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

const initMovies = (state, action) => {
  const allMovies = [...action.movies];

  let newMovieList = [];

  if (state.filters.length > 0) {
    allMovies.forEach((movie) => {
      state.filters.forEach((filter) => {
        if (movie.category === filter) {
          newMovieList.push(movie);
        }
      });
    });
  } else {
    newMovieList = allMovies;
  }

  const page = paginate(newMovieList, state.itemPerPage, state.pageNumber);

  const lastPage = Math.ceil(allMovies.length / state.itemPerPage);

  return {
    ...state,
    movies: page,
    allMovies: action.movies,
    lastPage: lastPage,
  };
};

const getMoviesToShow = (state, action) => {
  const allMovies = [...state.allMovies];

  let newMovieList = [];

  if (state.filters.length > 0) {
    allMovies.forEach((movie) => {
      state.filters.forEach((filter) => {
        if (movie.category === filter) {
          newMovieList.push(movie);
        }
      });
    });
  } else {
    newMovieList = allMovies;
  }

  const page = paginate(newMovieList, state.itemPerPage, state.pageNumber);

  const lastPage = Math.ceil(state.allMovies.length / state.itemPerPage);

  return {
    ...state,
    movies: page,
    lastPage: lastPage,
  };
};

const initCategories = (state, action) => {
  return {
    ...state,
    categories: action.categories,
  };
};

const toggleFilter = (state, action) => {
  return {
    ...state,
    filters: action.filterArray,
  };
};

const deleteMovie = (state, action) => {
  const movies = [...state.allMovies];

  let categories = [];

  const updatedMovies = movies.filter((movie) => movie.id !== action.id);

  updatedMovies.forEach((movie) => {
    if (!categories.includes(movie.category)) {
      categories.push(movie.category);
    }
  });

  return {
    ...state,
    allMovies: updatedMovies,
    categories: categories,
    filters: [],
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

  return {
    ...state,
    movies: movies,
  };
};

const changeItemPerPage = (state, action) => {
  return {
    ...state,
    itemPerPage: action.itemPerPage,
  };
};

const changePage = (state, action) => {
  let newPageNumber;
  if (action.action == "next") {
    if (state.pageNumber !== state.lastPage) {
      newPageNumber = state.pageNumber + 1;
    } else {
      newPageNumber = state.pageNumber;
    }
  }

  if (action.action == "previous") {
    if (state.pageNumber !== 1) {
      newPageNumber = state.pageNumber - 1;
    } else {
      newPageNumber = state.pageNumber;
    }
  }

  return {
    ...state,
    pageNumber: newPageNumber,
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
    case actionTypes.CHANGE_PAGE:
      return changePage(state, action);
    case actionTypes.GET_MOVIE_TO_SHOW:
      return getMoviesToShow(state, action);
    case actionTypes.CHANGE_ITEM_PER_PAGE:
      return changeItemPerPage(state, action);
    default:
      return state;
  }
};

export default reducer;
