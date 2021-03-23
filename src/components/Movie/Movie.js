import React from "react";

const Movie = (props) => {
  return (
    <div>
      <strong>{props.movie.title}</strong>
    </div>
  );
};

export default Movie;
