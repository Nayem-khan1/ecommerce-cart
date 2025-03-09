import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from "../features/cartSlice";
import { FaTrash } from "react-icons/fa6";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Your Cart</h2>

        {cartItems.length > 0 ? (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-md object-cover"
                  />

                  {/* Product Details */}
                  <div className="flex-1 ml-4">
                    <h3 className="font-semibold dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Selector */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: Math.max(item.quantity - 1, 1),
                          })
                        )
                      }
                      className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white px-2 py-1 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                      -
                    </button>
                    <span className="font-semibold dark:text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                      className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white px-2 py-1 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <p className="ml-3 text-lg font-semibold text-blue-500">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  {/* Remove Button */}
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="ml-3 text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>

            {/* Total & Actions */}
            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between text-lg font-semibold dark:text-white">
                <span>Total Items:</span>
                <span>{totalQuantity}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold dark:text-white mt-2">
                <span>Total Price:</span>
                <span>${totalPrice}</span>
              </div>

              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="w-1/2 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
                >
                  Clear Cart
                </button>
                <button className="w-1/2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-center dark:text-gray-400">
            Your cart is empty.
          </p>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
