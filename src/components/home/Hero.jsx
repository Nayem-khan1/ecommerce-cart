import React from "react";
import { motion } from "framer-motion";
import app from "../../assets/img/HeroArea/App.png";
import box from "../../assets/img/HeroArea/Box.png";
import perfume from "../../assets/img/HeroArea/perfume.png";
import sofa from "../../assets/img/HeroArea/Sofa.png";
import { Link } from "react-router";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const hoverEffect = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

function Hero() {
  return (
    <div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <motion.div
        className="bg-[#F0C4A1B2] rounded-2xl"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="p-4 2xl:p-8">
          <p className="text-4xl font-semibold">Elegance in <br /> Every Drop</p>
          <Link to="/all-products">
            <motion.button className="mt-6 bg-gray-400 text-white px-4 py-2 rounded-md" {...hoverEffect}>
              Shop Now
            </motion.button>
          </Link>
        </div>
        <img src={perfume} alt="perfume" className="object-contain" />
      </motion.div>

      <motion.div
        className="bg-[#A4D0F5B2] col-span-1 sm:col-span-2 rounded-2xl relative"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute p-4 2xl:p-8">
          <p className="text-4xl font-semibold">Transform Your Home <br /> with Modern Designs</p>
          <p className="mt-3">Elevate your space with stylish, functional, and trend-forward pieces.</p>
          <Link to="/all-products">
            <motion.button className="mt-6 bg-gray-400 text-white px-4 py-2 rounded-md" {...hoverEffect}>
              Shop Now
            </motion.button>
          </Link>
        </div>
        <img src={sofa} alt="sofa" className="mt-[6%] object-contain" />
      </motion.div>

      <div className="grid gap-4 grid-rows-2">
        <motion.div
          className="bg-[#A8DDD5B2] flex justify-center items-center rounded-2xl overflow-hidden"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="p-6">
            <p className="text-3xl font-semibold">Innovation at Your Fingertips</p>
            <Link to="/all-products">
              <motion.button className="mt-6 bg-gray-400 text-white px-4 py-2 rounded-md" {...hoverEffect}>
                Shop Now
              </motion.button>
            </Link>
          </div>
          <img src={box} alt="box" className="object-contain" />
        </motion.div>

        <motion.div
          className="bg-[#D5B1E8B2] flex justify-center items-center rounded-2xl overflow-hidden"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="p-6">
            <p className="text-3xl font-semibold">Fast & Secure Shopping Experience</p>
            <Link to="/all-products">
              <motion.button className="mt-6 bg-gray-400 text-white px-4 py-2 rounded-md" {...hoverEffect}>
                Shop Now
              </motion.button>
            </Link>
          </div>
          <img src={app} alt="app" className="object-contain" />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
