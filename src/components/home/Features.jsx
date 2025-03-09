import React from 'react'
import shippingFast from "../../assets/img/Icon/shipping-fast.png";
import socialNetworking from "../../assets/img/Icon/social-network.png";
import rotate from "../../assets/img/Icon/rotate-reverse.png";
import bookmark from "../../assets/img/Icon/bookmark.png";

function Features() {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 py-4">
        <div className="flex justify-center items-center bg-gray-200 p-4 rounded-md">
            <img className="w-12" src={shippingFast}/>
            <div className="ml-6 text-center">
                <p className="text-lg font-bold">Free Delivery</p>
                <p>From $50</p>
            </div>
        </div>
        <div className="flex justify-center items-center bg-gray-200 p-4 rounded-md">
            <img className="w-12" src={socialNetworking} alt='social networking'/>
            <div className="ml-6 text-center">
                <p className="text-lg font-bold">99% Positive</p>
                <p>Feedbacks</p>
            </div>
        </div>
        <div className="flex justify-center items-center bg-gray-200 p-4 rounded-md">
            <img className="w-12" src={rotate} alt='rotate'/>
            <div className="ml-6 text-center">
                <p className="text-lg font-bold">30 Days Return</p>
                <p>Policies</p>
            </div>
        </div>
        <div className="flex justify-center items-center bg-gray-200 p-4 rounded-md">
            <img className="w-12" src={bookmark} alt='bookmark'/>
            <div className="ml-6 text-center">
                <p className="text-lg font-bold">Only Best</p>
                <p>Brands</p>
            </div>
        </div>
    </div>
  )
}

export default Features