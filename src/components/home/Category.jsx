import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import baby from "../../assets/img/Category/Baby.png";
import home from "../../assets/img/Category/sofa.png";
import drink from "../../assets/img/Category/drink.png";
import fashion from "../../assets/img/Category/Fashion.png";
import electronic from "../../assets/img/Category/electronic.png";
import health from "../../assets/img/Category/Health.png";
import personalCare from "../../assets/img/Category/personalCare.png";
import table from "../../assets/img/Category/table.png";
import beauty from "../../assets/img/Category/Beauty.png";
import toy from "../../assets/img/Category/toy.png";

const categories = [
  { id: 1, name: "Grocery", img: drink, bg: "#C9E9FE4D" },
  { id: 2, name: "Home", img: home, bg: "#E7F7FF" },
  { id: 3, name: "Patio and Garden", img: table, bg: "#FDF5DD" },
  { id: 4, name: "Fashion", img: fashion, bg: "#FCE7D7" },
  { id: 5, name: "Electronics", img: electronic, bg: "#EAD7F7" },
  { id: 6, name: "Health & wellness", img: health, bg: "#cfe6f9" },
  { id: 7, name: "Baby", img: baby, bg: "#cdd3d8" },
  { id: 8, name: "Toys & Games", img: toy, bg: "#daffce" },
  { id: 9, name: "Personal Care", img: personalCare, bg: "#f8f0f1" },
  { id: 10, name: "Beauty", img: beauty, bg: "#d1e8fc" },
];

function Category() {
  return (
    <div className="py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold mb-8">Get it all right here</h1>
        <Link to="/all-products" className="text-[#26a6fb] px-4 font-semibold">View All</Link>
      </div>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {categories.map((category) => (
          <motion.div
            key={category.id}
            style={{ backgroundColor: category.bg }}
            className="flex justify-between p-4 rounded-lg shadow-md cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="font-bold mb-2">{category.name}</p>
            <motion.img
              className="w-20 h-16 object-contain"
              src={category.img}
              alt={category.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Category;
