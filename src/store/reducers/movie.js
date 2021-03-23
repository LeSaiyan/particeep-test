import * as actionTypes from "../actions/actionTypes";

const initialState = {
  movies: null,
};

const initMovies = (state, action) => {
  console.log("reducers : ", state, action);
  return {
    ...state,
    movies: action.movies,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_MOVIES:
      return initMovies(state, action);

    default:
      return state;
  }
};

export default reducer;
