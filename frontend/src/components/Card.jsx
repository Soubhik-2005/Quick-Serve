import React from 'react'
// import { useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom"

function Card({id, img, name, address, deliveryTime, cuisine, rating,logo}) {
    
  return (
    <Link to={`/resturent/${id}`}>
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 object-cover transition duration-300 p-6 w-[100%]" >
        <img src={img} alt="Resturent" className="w-full h-full rounded-lg" />
        <div className="flex items-center mt-4 gap-4">
        <img src={logo} alt={name} className="w-15 h-15 object-cover mb-4 rounded-lg display-inline"/>

        <h2 className="text-2xl font-bold ">{name}</h2>
        </div>
        <p className="text-gray-600 mt-2">{address}</p>
        <p className="text-yellow-500 mt-4">Rating: {rating} / 5</p>
        <p className="text-gray-800 mt-4">{deliveryTime}</p>
        <p className="text-gray-800 mt-2">{cuisine}</p>
        


    </div>
    </Link>
  )
}

export default Card