import React, { useEffect, useState } from "react";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import { changeItemPerPage, getMoviesToShow } from "../../store/actions/index";
import { useDispatch, useSelector } from "react-redux";
import "./SelectItemPerPage.css";

const SelectItemPerPage = () => {
  const dispatch = useDispatch();
  const itemPerPage = useSelector((state) => state.itemPerPage);
  const handleChange = (e) => {
    dispatch(changeItemPerPage(e.target.value));
    dispatch(getMoviesToShow());
  };
  return (
    <Select
      className="select-item-per-page"
      value={itemPerPage}
      onChange={handleChange}
      input={<Input />}
    >
      <MenuItem value={4}>4</MenuItem>
      <MenuItem value={8}>8</MenuItem>
      <MenuItem value={12}>12</MenuItem>
    </Select>
  );
};

export default SelectItemPerPage;
