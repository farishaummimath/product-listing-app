import styled from "styled-components";

const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: white;
  padding: 1rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

export default StickyHeader;
