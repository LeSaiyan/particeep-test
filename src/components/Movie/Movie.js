import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteMovie,
  addLike,
  addDislike,
  getMoviesToShow,
} from "../../store/actions/index";
import "./Movie.css";

import RatingBar from "../RatingBar/RatingBar";
import LikeMenu from "../LikeMenu/LikeMenu";

const Movie = (props) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const deleteHandler = (id) => {
    dispatch(deleteMovie(id));
    dispatch(getMoviesToShow());
  };

  const likeHandler = (id) => {
    setLike(!like);
    dispatch(addLike(id, !like));
  };

  const dislikeHandler = (id) => {
    setDislike(!dislike);
    dispatch(addDislike(id, !dislike));
  };

  return (
    <div className="movie-card">
      <div
        onClick={() => deleteHandler(props.movie.id)}
        className="trash"
      ></div>
      <strong>{props.movie.title}</strong>
      <p>{props.movie.category}</p>
      <RatingBar likes={props.movie.likes} dislikes={props.movie.dislikes} />
      <LikeMenu
        dislike={dislike}
        like={like}
        liked={() => likeHandler(props.movie.id)}
        disliked={() => dislikeHandler(props.movie.id)}
      />
    </div>
  );
};

export default Movie;
