import React, { useEffect } from "react";
import Movie from "../Movie/Movie";

const MoviesList = (props) => {
  useEffect(() => {}, []);
  return (
    <div>
      {props.movieList
        ? props.movieList.map((element) => (
            <Movie key={element.id} movie={element} />
          ))
        : null}
    </div>
  );
};

export default MoviesList;
