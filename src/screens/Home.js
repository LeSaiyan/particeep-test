import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { movies$ } from "../movies";
import { initMovies } from "../store/actions/index";
import MoviesList from "../components/MoviesList/MoviesList";

const Home = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movies);
  const getMovies = () => {
    return movies$;
  };
  useEffect(() => {
    getMovies().then((res) => {
      dispatch(initMovies(res));
    });
  }, []);

  return (
    <div>
      <MoviesList movieList={movieList} />
    </div>
  );
};

export default Home;
