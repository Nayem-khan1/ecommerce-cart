import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { motion } from "framer-motion";
import cart from "../../assets/img/Icon/Vector.png";
import Rating from "./Rating";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Item added to cart! 🛒");
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform relative"
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
      <h3 className="font-semibold mt-2 dark:text-white line-clamp-2">
        {product.title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400">{product.category}</p>
      <p className="text-xl font-semibold text-blue-500">${product.price}</p>
      <div className="flex items-center mt-1">
        <Rating rate={product.rating.rate} count={product.rating.count} />
      </div>
      <button
        onClick={handleAddToCart}
        className="flex justify-normal items-center bg-blue-200 e px-4 py-2 rounded-md mt-2 "
      >
        <img className="w-4 h-4" src={cart} alt="cart" />
        <span className="ml-2 text-sm font-semibold">Cart</span>
      </button>
    </motion.div>
  );
};

export default ProductCard;
