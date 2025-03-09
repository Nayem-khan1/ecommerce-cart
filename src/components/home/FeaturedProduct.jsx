import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import product1 from "../../assets/img/Product/Pro01.jpg";
import product2 from "../../assets/img/Product/Pro02.jpg";
import product3 from "../../assets/img/Product/Pro03.jpg";
import product4 from "../../assets/img/Product/Pro04.jpg";
import product5 from "../../assets/img/Product/Pro05.jpg";
import product6 from "../../assets/img/Product/Pro06.jpg";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router";
import ProductCard from "../product/ProductCard";

const productsData = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: product1,
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: product2,
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 3,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: product3,
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 4,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: product4,
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 5,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: product5,
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 6,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: product6,
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];

function FeaturedProduct() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on('slideChange', () => {
        setIsBeginning(swiperRef.current.swiper.isBeginning);
        setIsEnd(swiperRef.current.swiper.isEnd);
      });
    }
  }, []);

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <h1 className="text-xl font-bold mb-4">Featured</h1>
        <Link to="/all-products" className="text-[#26a6fb] px-4 font-semibold">View All</Link>
      </div>

      {/* Custom navigation buttons */}
      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView="auto"
          navigation={false}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          loop={false}
        >
          {productsData.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom arrow icons */}
        {!isBeginning && (
          <button onClick={slidePrev} className="swiper-button-prev absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
            <HiChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
        )}
        {!isEnd && (
          <button onClick={slideNext} className="swiper-button-next absolute top-1/2 right-0 z-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
            <HiChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        )}
      </div>
    </div>
  );
}

export default FeaturedProduct;
