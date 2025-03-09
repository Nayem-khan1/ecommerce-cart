import React from 'react';
import { motion } from 'framer-motion';
import shippingFast from "../../assets/img/Icon/shipping-fast.png";
import socialNetworking from "../../assets/img/Icon/social-network.png";
import rotate from "../../assets/img/Icon/rotate-reverse.png";
import bookmark from "../../assets/img/Icon/bookmark.png";

const features = [
  { img: shippingFast, title: "Free Delivery", desc: "From $50" },
  { img: socialNetworking, title: "99% Positive", desc: "Feedbacks" },
  { img: rotate, title: "30 Days Return", desc: "Policies" },
  { img: bookmark, title: "Only Best", desc: "Brands" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Features() {
  return (
    <motion.div 
      className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 py-4"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="flex justify-center items-center bg-gray-200 p-4 rounded-md"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <img className="w-12" src={feature.img} alt={feature.title} />
          <div className="ml-6 text-center">
            <p className="text-lg font-bold">{feature.title}</p>
            <p>{feature.desc}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Features;
