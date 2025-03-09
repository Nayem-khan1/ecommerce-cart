import { useEffect, useState, lazy, Suspense } from "react";
import { fetchProducts } from "../services/productService";
import { motion } from "framer-motion";
import { Link } from "react-router";

// Lazy load components for better performance
const ProductCard = lazy(() => import("../components/product/ProductCard"));
const Hero = lazy(() => import("../components/home/Hero"));
const Feature = lazy(() => import("../components/home/Features"));
const FeaturedProduct = lazy(() => import("../components/home/FeaturedProduct"));
const Category = lazy(() => import("../components/home/Category"));

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="px-4">
      <Suspense fallback={<div className="text-center text-lg">Loading...</div>}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="mt-4"
        >
          <Hero />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4"
        >
          <Feature />
          <div className="w-full border-t border-gray-300" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4"
        >
          <FeaturedProduct />
          <div className="mt-4 w-full border-t border-gray-300" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-4"
        >
          <Category />
        </motion.div>
      </Suspense>

      <motion.div 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-8 flex justify-between items-center"
      >
        <h1 className="text-xl font-bold mb-4">ON Sale</h1>
        <Link to="/all-products" className="text-[#26a6fb] px-4 font-semibold">View All</Link>
      </motion.div>

      {loading ? (
        <div className="text-center text-lg">Loading products...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-4"
        >
          {products.map((product) => (
            <Suspense key={product.id} fallback={<div>Loading Product...</div>}>
              <ProductCard product={product} />
            </Suspense>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default HomePage;
