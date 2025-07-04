import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/productsSlice";

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-4px);
  }
`;
const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
const CardContent = styled.div`
  padding: 1rem;
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 0.5rem;
  }
  p {
    margin: 0.25rem 0;
    color: #444;
    font-size: 0.9rem;
  }
`;

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.products.favorites);
  const isFav = favorites.includes(product.id);

  return (
    <Card>
      <CardImage src={product.image} alt={product.name} loading="lazy" />
      <CardContent>
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
        <p>
          {product.category} | ⭐ {product.rating}
        </p>
        <button onClick={() => dispatch(toggleFavorite(product.id))}>
          {isFav ? "❤️ Remove" : "🤍 Favorite"}
        </button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
