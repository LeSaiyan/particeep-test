import React, { useEffect, useState } from "react";
import "./MovieList.css";
import Movie from "../Movie/Movie";
import SelectCategory from "../SelectCategory/SelectCategory";

const MoviesList = (props) => {
  const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };
  let page;
  if (props.movieList) {
    page = paginate(props.movieList, 4, 1);
  }

  return (
    <div>
      <SelectCategory categorieList={props.categorieList} />
      <div className="movie-list">
        {props.movieList
          ? props.movieList.map((element) => (
              <Movie key={element.id} movie={element} />
            ))
          : null}
      </div>
    </div>
  );
};

export default MoviesList;
