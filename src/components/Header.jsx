// src/components/Header.jsx
import React from "react";
import styled from "styled-components";
const HeaderBar = styled.header`
  width: 100%;
  padding: 1.5rem 2rem;
  background-color: #ffffff;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #0070f3;
  margin: 0;
`;

const Tagline = styled.span`
  font-size: 0.95rem;
  color: #666;
`;

const Header = () => {
  return (
    <HeaderBar>
      <LogoContainer>
        <Logo>ShopGrid</Logo>
        <Tagline>Discover your next buy</Tagline>
      </LogoContainer>
    </HeaderBar>
  );
};
export default Header;
