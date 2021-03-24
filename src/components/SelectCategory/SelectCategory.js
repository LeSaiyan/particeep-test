import React, { useEffect, useState } from "react";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import { toggleFilter } from "../../store/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { movies$ } from "../../movies";
import "./SelectCategory.css";

const SelectCategory = (props) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const getMovies = () => {
    return movies$;
  };

  const handleChange = (e) => {
    getMovies().then((res) => {
      dispatch(toggleFilter(e.target.value, res));
    });
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
