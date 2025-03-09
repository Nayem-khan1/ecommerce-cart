import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";
import ProductCard from "../components/product/ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    let updatedProducts = [...products];

    if (selectedCategory !== "all") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchQuery) {
      updatedProducts = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOption === "price-low-high") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high-low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating") {
      updatedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    } else if (sortOption === "name") {
      updatedProducts.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredProducts(updatedProducts);
  }, [searchQuery, selectedCategory, sortOption, products]);

  return (
    <div className="container mx-auto p-6 flex gap-6">
      {/* Sidebar Filters */}
      <aside className="w-1/4 p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-2 border rounded mb-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <h3 className="font-medium">Category</h3>
        <select
          className="w-full p-2 border rounded mt-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        <h3 className="mt-4 font-medium">Sort By</h3>
        <select
          className="w-full p-2 border rounded mt-2"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Default</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="rating">Top Rated</option>
          <option value="name">Name: A-Z</option>
        </select>
      </aside>

      {/* Product Grid */}
      <main className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
};

export default AllProducts;
