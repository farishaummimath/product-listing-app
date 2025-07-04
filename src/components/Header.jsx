import React from "react";
import styled from "styled-components";

const HeaderBar = styled.header`
  width: 100%;
  padding: 1rem 1.5rem;
  background-color: #ffffff;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0070f3;
  margin: 0;
  white-space: nowrap;
`;

const SubTitle = styled.span`
  font-size: 0.9rem;
  color: #666;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Header = () => {
  return (
    <HeaderBar>
      <Logo>ShopGrid</Logo>
      <SubTitle>Explore </SubTitle>
    </HeaderBar>
  );
};

export default Header;
