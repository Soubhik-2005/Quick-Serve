import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from "../components/Loading"

function ResturentPage() {
    const {id} = useParams();
    const [resturent, setResturent] = useState(null);
    useEffect( () => {
        async function getResturent(){
    const{data} = await axios.get(`http://localhost:8000/api/resturent/${id}`,{withCredentials:true});
    
    setResturent(data.resturent);
          

}

getResturent();
    },[id])

   async function addCart(item){
    try{
      
       await axios.post("http://localhost:8000/api/cart/add",{
        productId:item._id,
         name:item.name,
          price:item.price, 
          image:item.image,
          description:item.description
      },{withCredentials:true});

      console.log("hello")
      console.log("cart add");
    }catch(err){
      console.log("Error in addCart" +err);

    }
  }

    if(!resturent) return <Loading/>
  return (
    <div className="p-2 bg-orange-100">
      <img src={resturent.image} alt={resturent.name} className='w-full h-[30vmax] object-cover mb-4 rounded-lg'/>

      <div className="flex items-center mt-4 gap-4">

        <img src={resturent.logo} alt={resturent.name} className="w-15 h-15 object-cover mb-4 rounded-lg display-inline"/>

        <h2 className="text-2xl font-bold ">{resturent.name}</h2>
        </div>

      <p className='mb-2'>Location: {resturent.location}</p>
      <p className='mb-2'>Cuisine: {resturent.cuisine}</p>
      <p className='mb-2'>Rating: {resturent.rating}</p>
      <p className='mb-4'>Delivery Time: {resturent.deliveryTime} mins</p>
      <h2 className='text-xl font-semibold mb-3'>Menu</h2>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {resturent.menu.map((item, index) => (
          
          <div key={index} className='border p-4 rounded-lg shadow-md'>
            
            <img src={item.image} alt={item.name} className='w-full h-40 object-cover mb-3 rounded'/>
            <h3 className='text-lg font-bold'>{item.name}</h3>
            <p className='text-gray-600'>Price: ${item.price}</p>
            {console.log(typeof item.price)}
            <button className="bg-orange-400  px-4 py-2 rounded-lg mt-3 cursor-pointer text-center shadow-md hover:shadow-lg active:scale-95 " onClick={()=>addCart(item)}>Add to Cart</button>
          </div>

        ))}

      </div>

    </div>
  )
}

export default ResturentPage