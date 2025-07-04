// App.jsx
import React, { useEffect, useRef, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadProducts,
  addMoreProducts,
  setLoading,
} from "./redux/productsSlice";
import StickyHeader from "./components/StickyHeader";
import Tabs from "./components/Tabs";
import Filters from "./components/Filters";
import Sort from "./components/Sort";
import ProductGrid from "./components/ProductGrid";
import ProductCard from "./components/ProductCard";
import Loader from "./components/Loader";
import ProductCardSkeleton from "./components/ProductCardSkeleton";

import PageWrapper from "./components/PageWrapper";
import styled from "styled-components";
import Header from "./components/Header";
const emptyFav = "https://placehold.co/600x400?text=No+Favorites";
const emptyData = "https://placehold.co/600x400?text=No+Products+Found";
const HeaderControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  // justify-content: space-between;
  width: 100%;

  select {
    max-width: 200px;
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;

    select {
      width: 100%;
    }
  }
`;

const EndMessage = styled.div`
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
  color: #555;
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1rem;
  color: #888;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  img {
    width: 180px;
    opacity: 0.8;
  }
`;

const App = () => {
  const dispatch = useDispatch();
  const {
    allProducts,
    visibleProducts,
    favorites,
    category,
    sortOrder,
    activeTab,
    loading,
  } = useSelector((state) => state.products);

  const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false);
  const observer = useRef();

  const lastProductRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (visibleProducts.length < finalList.length) {
            dispatch(setLoading(true));
            setTimeout(() => {
              dispatch(addMoreProducts());
              dispatch(setLoading(false));
            }, 1000);
          } else {
            setHasScrolledToEnd(true);
          }
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, dispatch, visibleProducts.length]
  );

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const filtered = allProducts.filter((p) =>
    category === "All" ? true : p.category === category
  );

  const sorted = [...filtered].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  const finalList =
    activeTab === "favorites"
      ? sorted.filter((p) => favorites.includes(p.id))
      : sorted;

  return (
    <PageWrapper>
      <Header />
      <StickyHeader>
        <HeaderControls>
          <div>
            <Tabs />
          </div>
          <div>
            <Filters />
          </div>
          <div>
            <Sort />
          </div>
        </HeaderControls>
      </StickyHeader>
      {finalList.length === 0 ? (
        <EmptyMessage>
          {/* <img
            src={activeTab === "favorites" ? emptyFav : emptyData}
            alt="Empty State"
          /> */}
          {activeTab === "favorites"
            ? "No favorites added yet 💔"
            : "No products available."}
        </EmptyMessage>
      ) : (
        <>
          <ProductGrid>
            {finalList.slice(0, visibleProducts.length).map((product, idx) => {
              const isLast = idx === visibleProducts.length - 1;
              return (
                <div key={product.id} ref={isLast ? lastProductRef : null}>
                  <ProductCard product={product} />
                </div>
              );
            })}
          </ProductGrid>
          {/* {loading && <Loader />} */}
          {loading && (
            <ProductGrid>
              {Array.from({ length: 6 }).map((_, idx) => (
                <ProductCardSkeleton key={`skeleton-${idx}`} />
              ))}
            </ProductGrid>
          )}
          {loading &&
            Array.from({ length: 6 }).map((_, idx) => (
              <ProductCardSkeleton key={`skeleton-${idx}`} />
            ))}

          {hasScrolledToEnd &&
            !loading &&
            visibleProducts.length >= finalList.length && (
              <EndMessage>You've reached the end 🎉</EndMessage>
            )}
        </>
      )}
    </PageWrapper>
  );
};

export default App;
