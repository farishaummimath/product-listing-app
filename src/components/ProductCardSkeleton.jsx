import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -300px 0; }
  100% { background-position: 300px 0; }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const ShimmerBlock = styled.div`
  height: ${(props) => props.height || "16px"};
  margin-bottom: ${(props) => props.mb || "0.5rem"};
  border-radius: 6px;
  background: linear-gradient(to right, #f2f2f2 0%, #e6e6e6 50%, #f2f2f2 100%);
  background-size: 600px 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
`;

const ProductCardSkeleton = () => (
  <Card>
    <ShimmerBlock height="200px" mb="1rem" />
    <div style={{ padding: "1rem" }}>
      <ShimmerBlock height="18px" />
      <ShimmerBlock height="14px" />
      <ShimmerBlock height="14px" />
      <ShimmerBlock height="32px" />
    </div>
  </Card>
);

export default ProductCardSkeleton;
