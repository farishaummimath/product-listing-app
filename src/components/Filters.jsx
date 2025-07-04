// Filters.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/productsSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setCategory(e.target.value));
  };

  return (
    <select onChange={handleChange}>
      <option value="All">All Categories</option>
      <option value="Electronics">Electronics</option>
      <option value="Clothing">Clothing</option>
    </select>
  );
};

export default Filters;
