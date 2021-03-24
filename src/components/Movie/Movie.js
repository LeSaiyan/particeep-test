import React, { useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useDispatch } from "react-redux";
import { deleteMovie, addLike, addDislike } from "../../store/actions/index";
import "./Movie.css";

const Movie = (props) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const deleteHandler = (id) => {
    dispatch(deleteMovie(id));
  };

  const likeHandler = (id) => {
    setLike(!like);
    dispatch(addLike(id, !like));
  };

  const dislikeHandler = (id) => {
    setDislike(!dislike);
    dispatch(addDislike(id, !dislike));
  };

  let progress =
    (props.movie.likes * 100) / (props.movie.likes + props.movie.dislikes);

  return (
    <div className="movie-card">
      <strong>{props.movie.title}</strong>
      <p>{props.movie.category}</p>
      <LinearProgress variant="determinate" value={progress} />
      <button onClick={() => deleteHandler(props.movie.id)}>SUPP</button>
      <button onClick={() => likeHandler(props.movie.id)}>LIKE</button>
      <button onClick={() => dislikeHandler(props.movie.id)}>DISLIKE</button>
    </div>
  );
};

export default Movie;
