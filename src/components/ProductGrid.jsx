import styled from "styled-components";
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2rem;
  padding: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    padding: 1rem;
  }
`;
export default ProductGrid;
