import React from "react";
import "./MovieList.css";
import Movie from "../Movie/Movie";
import SelectCategory from "../SelectCategory/SelectCategory";

import SelectItemPerPage from "../SelectItemPerPage/SelectItemPerPage";
import Pagination from "../Pagination/Pagination";

const MoviesList = (props) => {
  return (
    <div>
      <div className="movie-list">
        {props.movieList
          ? props.movieList.map((element) => (
              <Movie key={element.id} movie={element} />
            ))
          : null}
      </div>
      <SelectCategory categorieList={props.categorieList} />
      <SelectItemPerPage />
      <Pagination />
    </div>
  );
};

export default MoviesList;
