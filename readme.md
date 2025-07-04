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
```bash
├── src/ # Source files
│ ├── components/ # Reusable UI components
│ │ ├── Filters.jsx # Dropdown to filter by category
│ │ ├── Loader.jsx # Loading spinner
│ │ ├── PageWrapper.jsx # Global layout wrapper
│ │ ├── ProductCard.jsx # UI for individual product card
│ │ ├── ProductCardSkeleton.jsx # Skeleton loader for product card
│ │ ├── ProductGrid.jsx # Responsive grid layout for products
│ │ ├── Sort.jsx # Dropdown to sort by price
│ │ ├── StickyHeader.jsx # Sticky filter/sort/tabs section
│ │ └── Tabs.jsx # Tabs to toggle between all/favorites
│ │
│ ├── data/ # Local JSON product data
│ │ └── data.json
│ │
│ ├── redux/ # Redux slice and store logic
│ │ └── productsSlice.js
│ │
│ ├── App.jsx # Main application component
│ └── index.js # Entry point rendering App to the DOM
│
├── .gitignore # Files and folders to ignore in Git
├── index.html # HTML template
├── package.json # Project metadata and dependencies
├── package-lock.json # Lock file for consistent installs
└── README.md # Project documentation
```
## Tech Stack

React

Redux Toolkit

Styled-components

## 🧾 Setup Instructions

1. **Clone the repository**
   ```bash
        git clone https://github.com/farishaummimath/product-listing-app
        cd product-listing-app
   ```
2. **Install dependencies**
   ```bash
       npm install
   ```
3. **Open in browser**

Visit: http://localhost:1234
