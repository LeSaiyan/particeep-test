import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

const RatingBar = (props) => {
  let progress = (props.likes * 100) / (props.likes + props.dislikes);
  return (
    <div>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
};

export default RatingBar;
