import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";

const initialState = {
  allProducts: [],
  visibleProducts: [],
  favorites: [],
  category: "All",
  sortOrder: "asc",
  activeTab: "all",
  loading: false,
  hasMore: true,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProducts(state) {
      state.allProducts = data;
      state.visibleProducts = data.slice(0, 10);
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSortOrder(state, action) {
      state.sortOrder = action.payload;
    },
    toggleFavorite(state, action) {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter((fid) => fid !== id);
      } else {
        state.favorites.push(id);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    setTab(state, action) {
      state.activeTab = action.payload;
    },
    addMoreProducts(state) {
      const currentLength = state.visibleProducts.length;
      const more = state.allProducts.slice(currentLength, currentLength + 10);
      state.visibleProducts = [...state.visibleProducts, ...more];
      if (state.visibleProducts.length >= state.allProducts.length) {
        state.hasMore = false;
      }
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const {
  loadProducts,
  setCategory,
  setSortOrder,
  toggleFavorite,
  setTab,
  addMoreProducts,
  setLoading,
} = productSlice.actions;
export default productSlice.reducer;
