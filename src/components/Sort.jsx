// Sort.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { setSortOrder } from "../redux/productsSlice";

const Sort = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setSortOrder(e.target.value));
  };

  return (
    <select onChange={handleChange}>
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
    </select>
  );
};

export default Sort;
