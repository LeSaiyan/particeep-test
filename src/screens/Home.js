import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../store/actions/index";
import MoviesList from "../components/MoviesList/MoviesList";

const Home = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movies);
  const categorieList = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div>
      <MoviesList movieList={movieList} categorieList={categorieList} />
    </div>
  );
};

export default Home;
