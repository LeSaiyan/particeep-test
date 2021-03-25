import React from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../store/actions/index";
import "./Pagination.css";
import Left from "../../assets/img/left-arrow.png";
import Right from "../../assets/img/right-arrow.png";

const Pagination = () => {
  const dispatch = useDispatch();

  const changePageHandler = (action) => {
    dispatch(changePage(action));
  };
  return (
    <div className="pagination">
      <button onClick={() => changePageHandler("previous")}>
        <img src={Left} alt="previous" />
      </button>
      <button onClick={() => changePageHandler("next")}>
        <img src={Right} alt="next" />
      </button>
    </div>
  );
};

export default Pagination;
