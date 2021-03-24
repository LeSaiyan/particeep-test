import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import { toggleFilter } from "../../store/actions/index";
import { useDispatch, useSelector } from "react-redux";

const MoviesList = (props) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  useEffect(() => {}, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(toggleFilter(e.target.value));
  };
  return (
    <div>
      <Select
        labelId="demo-mutiple-name-label"
        id="demo-mutiple-name"
        multiple
        value={filters}
        onChange={handleChange}
        input={<Input />}
      >
        {props.categorieList.map((categorie) => (
          <MenuItem
            key={categorie}
            value={categorie}
            // style={getStyles(name, personName, theme)}
          >
            {categorie}
          </MenuItem>
        ))}
      </Select>

      {props.movieList
        ? props.movieList.map((element) => (
            <Movie key={element.id} movie={element} />
          ))
        : null}
    </div>
  );
};

export default MoviesList;
