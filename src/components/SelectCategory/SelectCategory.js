import React, { useEffect, useState } from "react";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import { toggleFilter, getMoviesToShow } from "../../store/actions/index";
import { useDispatch, useSelector } from "react-redux";
import "./SelectCategory.css";

const SelectCategory = (props) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleChange = (e) => {
    dispatch(toggleFilter(e.target.value));
    dispatch(getMoviesToShow());
  };
  return (
    <Select
      className="select"
      multiple
      value={filters}
      onChange={handleChange}
      input={<Input />}
    >
      {props.categorieList.map((categorie) => (
        <MenuItem key={categorie} value={categorie}>
          {categorie}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectCategory;
