import React from 'react'

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-t-4 border-blue-500 animate-spin"></div>
        <div className="absolute inset-1 rounded-full bg-white"></div>
      </div>
    </div>
  )
}

export default Loader;