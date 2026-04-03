import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({id, img, name, address, deliveryTime, cuisine, rating}) {
    const Navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300 p-6 w-[100%]" onClick={()=> Navigate(`/resturent/${id}`)}>
        <img src={img} alt="Resturent" className="w-full h-full object-cover rounded-lg" />
        <h2 className="text-2xl font-bold mt-4">{name}</h2>
        <p className="text-gray-600 mt-2">{address}</p>
        <p className="text-yellow-500 mt-4">Rating: {rating} / 5</p>
        <p className="text-gray-800 mt-4">{deliveryTime}</p>
        <p className="text-gray-800 mt-2">{cuisine}</p>
        


    </div>
  )
}

export default Card