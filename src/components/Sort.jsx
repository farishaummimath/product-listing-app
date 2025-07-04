// Sort.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { setSortOrder } from "../redux/productsSlice";
import styled from "styled-components";

const StyledSelect = styled.select`
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  max-width: 200px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #0070f3;
    box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.2);
  }
`;

const Sort = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setSortOrder(e.target.value));
  };

  return (
    <StyledSelect onChange={handleChange}>
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
    </StyledSelect>
  );
};

export default Sort;
