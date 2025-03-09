import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Rating({ rate, count }) {
  const fullStars = Math.floor(rate);
  const halfStar = rate % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <>
      <div className="flex text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}

        {halfStar && <FaStarHalfAlt />}
        
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
      </div>

      <span className="ml-2 text-gray-500 dark:text-gray-400 text-sm">
        ({count} reviews)
      </span>
    </>
  );
}

export default Rating;
