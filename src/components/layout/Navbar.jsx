import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { HiMagnifyingGlass, HiBars3, HiBell, HiXMark } from "react-icons/hi2";
import logo from "../../assets/img/Logo.png";
import wishlist from "../../assets/img/Icon/wishlist.svg";
import account from "../../assets/img/Icon/Ac.svg";
import cart from "../../assets/img/Icon/Cart.svg";
import { FaCaretDown } from "react-icons/fa";
import bars from "../../assets/img/Icon/bars.svg";
import cartBusket from "../../assets/img/Icon/Cart_busket .png";
import shop from "../../assets/img/Icon/Shop.svg";
import userIcon from "../../assets/img/Icon/user.png";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/cartSlice";
import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const dispatch = useDispatch();
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  return (
    <Disclosure as="header" className="bg-white shadow">
      <div className="mx-auto w-11/12 px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="relative z-10 flex px-2 lg:px-0">
            <div className="flex shrink-0 items-center">
              <Link to="/">
                <img alt="Company Name" src={logo} className="h-8 w-auto" />
              </Link>
            </div>
          </div>
          <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:inset-0">
            <div className="grid w-full sm:max-w-lg">
              <input
                name="search"
                type="search"
                placeholder="Search buzfi ..."
                className="col-start-1 row-start-1 block w-full rounded-full bg-white py-1.5 pl-10 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-[#26a6fb] placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#26a6fb] sm:text-sm/6"
              />
              <div className="col-start-1 row-start-1 self-center justify-self-end bg-[#26a6fb] rounded-full p-1 mr-1">
                <HiMagnifyingGlass
                  aria-hidden="true"
                  className=" pointer-events-none size-5 text-gray-900"
                />
              </div>
            </div>
          </div>
          <div className="relative z-10 flex items-center lg:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <HiBars3
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <HiXMark
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
            <Link to="/wishlist" className="flex items-end mr-4">
              <img className="mr-2 pb-1" src={wishlist} alt="wishlist" />
              <div className="">
                <p className="text-[12px]">Reorder</p>
                <p className="font-bold">My Items</p>
              </div>
            </Link>
            <div className="h-12 border-r-2 border-gray-400"></div>
            <Link to="sign-in" className="ml-4 flex items-end mr-4">
              <img className="mr-2 pb-1" src={account} alt="user account" />
              <div>
                <p className="text-[12px]">Sign in</p>
                <p className="font-bold">Account</p>
              </div>
            </Link>
            <div className="h-12 border-r-2 border-gray-400"></div>

            {/* Cart dropdown */}
            <Menu as="div" className="relative ml-4 shrink-0">
              <div>
                <MenuButton className="relative flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
                  <img alt="Cart" src={cart} className="w-6 h-6" />
                  <span className="text-sm font-semibold">
                    {totalQuantity} Items
                  </span>
                  <FaCaretDown />
                </MenuButton>
              </div>

              <MenuItems className="absolute right-0 z-10 mt-2 w-64 bg-white shadow-xl rounded-xl overflow-hidden">
                {cartItems.length > 0 ? (
                  <>
                    <div className="max-h-60 overflow-y-auto">
                      {cartItems.map((item) => (
                        <MenuItem key={item.id}>
                          {({ active }) => (
                            <div
                              className={`flex items-center p-3 space-x-3 border-b ${
                                active ? "bg-gray-100" : ""
                              }`}
                            >
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-12 h-12 rounded-md object-cover"
                              />
                              <div className="flex-1">
                                <h4 className="text-sm font-semibold">
                                  {item.title}
                                </h4>
                                <p className="text-xs text-gray-500">
                                  {item.quantity} × ${item.price.toFixed(2)}
                                </p>
                              </div>
                              <button
                                onClick={() =>
                                  dispatch(removeFromCart(item.id))
                                }
                                className="text-red-500 hover:text-red-700"
                              >
                                <FaTrash />
                              </button>
                            </div>
                          )}
                        </MenuItem>
                      ))}
                    </div>

                    {/* Subtotal & Checkout Button */}
                    <div className="p-3 bg-gray-50">
                      <div className="flex justify-between font-semibold text-gray-700">
                        <span>Subtotal:</span>
                        <span>${totalPrice}</span>
                      </div>
                      <Link to="/checkout">
                        <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                          Checkout
                        </button>
                      </Link>
                    </div>
                  </>
                ) : (
                  <div className="p-3 text-center text-gray-500">
                    Your cart is empty
                  </div>
                )}
              </MenuItems>
            </Menu>
          </div>
        </div>
        <nav
          aria-label="Global"
          className="hidden lg:flex lg:space-x-8 lg:py-3"
        >
          <div className="w-full flex justify-between">
            <div className="flex">
              <Link to="/all-products" className="flex justify-center items-center">
                <img className="w-3.5 h-4" src={bars} alt="bars" />
                <p className="text-sm ml-2">All categories</p>
              </Link>
              <Link to="/best-sellers" className="flex justify-center items-center ml-6">
                <img className="w-5 h-5" src={cartBusket} alt="cart" />
                <p className="text-sm ml-2">Best Sellers</p>
              </Link>
            </div>
            <div className="flex">
              <Link to="/become-a-sellers" className="flex justify-normal items-center">
                <img className="w-5 h-5" src={shop} alt="shop icon" />
                <p className="ml-2 text-sm">Become a sellers</p>
              </Link>
              <Link to="become-a-dropshipper" className="flex justify-normal items-center ml-4">
                <img className="w-4 h-4" src={userIcon} alt="user icon" />
                <p className="ml-2 text-sm">Become a dropshipper</p>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <DisclosurePanel as="nav" aria-label="Global" className="lg:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
        <div className="border-t border-gray-200 pb-3 pt-4">
          <div className="px-4">
            <div className="">
              <p className="w-6 text-center bg-[#26a6fb] text-white rounded-md">
                0
              </p>
            </div>
            <div className="mt-3">
              <img alt="" src={cart} className="mr-2" />
              <p className="mr-2">$ 0.00</p>
            </div>
          </div>
          <div className="mt-3 space-y-1 px-2">
            {userNavigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default Navbar;
