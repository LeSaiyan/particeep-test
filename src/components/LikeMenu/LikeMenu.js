import React from "react";
import Like from "../../assets/img/like.png";
import LikeActive from "../../assets/img/like-active.png";
import Dislike from "../../assets/img/dislike.png";
import DislikeActive from "../../assets/img/dislike-active.png";
import "./LikeMenu.css";

const LikeMenu = (props) => {
  return (
    <div className="like-menu">
      <img
        onClick={props.liked}
        src={!props.like ? Like : LikeActive}
        alt="like"
      />
      <img
        onClick={props.disliked}
        src={!props.dislike ? Dislike : DislikeActive}
        alt="dislike"
      />
    </div>
  );
};

export default LikeMenu;
