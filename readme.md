# React Product Listing Page

A simple product listing page built with React and Redux Toolkit. It supports filtering, sorting, infinite scrolling, and a favorites list.

## Features

- Displays products in a responsive grid.
- Filter products by category.
- Sort by price (Low to High / High to Low).
- Add/remove products to/from favorites.
- Toggle between all products and favorites.
- Infinite scrolling with a loader.
- Lazy-loaded images for performance.
- Clean empty states with illustrations.

## Tech Stack

- React
- Redux Toolkit
- Styled-components

## Folder Structure

src/
├── components/
│ ├── ProductCard.jsx
│ ├── ProductGrid.jsx
│ ├── Tabs.jsx
│ ├── Filters.jsx
│ ├── Sort.jsx
│ ├── Loader.jsx
│ └── StickyHeader.jsx
├── redux/
│ └── productsSlice.js
├── data/
│ └── data.json
├── assets/
│ ├── empty-data.png
│ └── empty-fav.png
├── App.jsx
└── index.js

## Tech Stack

React

Redux Toolkit

Styled-components

React Testing Library
