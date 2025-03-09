# 🛍️ E-Commerce Cart Management System

## 📌 Project Overview
This is a **React-based E-Commerce Cart Management System** that allows users to browse products, add them to their cart, and proceed to checkout. The application is designed with **scalability, reusability, and maintainability**.

## 🚀 Features
- **Product Listing** – Display all available products.
- **Cart Management** – Add, remove, and update items in the cart.
- **Redux State Management** – Centralized state handling for cart and products.
- **API Integration** – Fetch product data using Axios.
- **Reusable UI Components** – Structured components for better maintainability.

## 📂 Folder Structure
```
/src
├── assets/                 # Static assets (images, icons, fonts)
├── components/             # Reusable UI components
│   ├── common/             # Generic UI components
│   │   ├── Loader.jsx
│   ├── layout/             # Layout-related components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   ├── home/               # Home page components
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── FeaturedProduct.jsx
│   ├── product/            # Product-related components
│   │   ├── ProductCard.jsx
├── features/               # Redux features (state slices)
│   ├── cart/               # Cart feature
│   │   ├── cartSlice.js
├── layouts/                # Layout wrappers
│   ├── MainLayout.jsx
├── providers/                # provider wrappers
│   ├── ToastProvider.jsx
├── routes/                # route wrappers
│   ├── AppRoutes.jsx
├── pages/                  # Page components
│   ├── HomePage.jsx
│   ├── CheckoutPage.jsx
│   ├── AllProducts.jsx
│   ├── NotFound.jsx
|
├── services/               # API calls
│   ├── productService.js
│
├── utils/                  # Utility functions
│   ├── formatPrice.js
│
├── App.jsx                 # Main application
├── main.jsx                # React entry point
├── store.js                # Redux store
├── routes.js               # Route configurations
```

## ⚡ Technologies Used
- **Frontend:** React.js, Vite.js, Tailwind CSS
- **State Management:** Redux Toolkit
- **Data Fetching:** Axios
- **Routing:** React Router

## 🛠️ Installation & Setup

1. **Clone the Repository**
   git clone https://github.com/Nayem-khan1/ecommerce-cart.git
   ```sh
   cd ecommerce-cart
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Run the Application**
   ```sh
   npm run dev
   ```

4. **Build for Production**
   ```sh
   npm run build
   ```

## 🔧 API Integration
The application fetches product data using an API service.
- **`/services/productService.js`** manages API requests using Axios.

---