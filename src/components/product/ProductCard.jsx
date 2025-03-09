import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import { motion } from 'framer-motion';
import FeaturedProduct from '../home/FeaturedProduct';
import Features from '../home/Features';
import Category from '../home/Category';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform"
      whileHover={{ scale: 1.05 }}
    >
      <div className="overflow-hidden rounded-xl">
        <motion.img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-48 object-contain" 
          whileHover={{ scale: 1.1 }}
        />
      </div>
      <h3 className="text-lg font-bold mt-2 dark:text-white">{product.title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{product.category}</p>
      <p className="text-xl font-semibold text-blue-500">${product.price}</p>
      <button 
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl mt-2 w-full hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </motion.div>
  );
};

export default ProductCard;
