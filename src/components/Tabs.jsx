import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../redux/productsSlice";

const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Tab = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: ${(props) => (props.$active ? "#0070f3" : "#f0f0f0")};
  color: ${(props) => (props.$active ? "white" : "#333")};
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;

  &:hover {
    background-color: #0070f3;
    color: white;
  }
`;

const Tabs = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.products.activeTab);

  return (
    <TabContainer>
      <Tab
        $active={activeTab === "all"}
        onClick={() => dispatch(setTab("all"))}
      >
        All Products
      </Tab>
      <Tab
        $active={activeTab === "favorites"}
        onClick={() => dispatch(setTab("favorites"))}
      >
        Favorites
      </Tab>
    </TabContainer>
  );
};

export default Tabs;
