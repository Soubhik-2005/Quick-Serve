// import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addCart,decreament } from '../services/cartService';
import { useDispatch } from 'react-redux';
import { setCart } from '../redux/slices/cartSlice';
// import axios from "axios"


function Cart() {
  const dispatch = useDispatch();
  const handleIncreament = async(item,id)=>{
    try{
      const data = await addCart(item,id);
      dispatch(setCart(data));
    }
    catch(err){
      console.log(err);
    }
  }

  const handleDecreament = async(item)=>{
    try{
    const data = await decreament(item);
    dispatch(setCart(data));
  }catch(err){
    console.log(err);
  }
}

  const items = useSelector(state => state.cart);
  console.log(items);
  
  if(items.items.length == 0) return (<div className="bg-orange-100 h-screen w-full flex justify-center items-center text-2xl"> No item is added </div>)

  return (  
    <div className="bg-orange-100 h-screen p-4">
      
        {
          items.items.map((item)=>(
            <Link to={`/resturent/${item.resturentId}`}>
            <div key={item._id} className="border border-orange-600 rounded-lg p-6 m-4 flex justify-between items-center bg-transparent text-xl hover:bg-orange-200 cursor-pointer">
              <div className="flex gap-4 items-center">
                
              <img src={item.image} alt="" className="w-35 h-35 object-cover rounded-lg"/>
              <div>
              <h2>{item.name}</h2>
              <div className="flex gap-4 ">
              <button className="bg-red-400 py-1 px-2 rounded-lg coursor-pointer active:bg-red-300" onClick={(e)=>{ e.preventDefault();
                    e.stopPropagation();
                    handleDecreament(item)}}>-</button>
              <p className="text-gray-400 mt-1">Quantity: {item.quantity}</p>
              <button className="bg-green-400 py-1 px-2 rounded-lg cursor-pointer active:bg-green-200" onClick={(e)=>{
                e.preventDefault();
                    e.stopPropagation();
                handleIncreament(item,item.resturentId)}}>+</button>
              </div>
              </div>  
              </div>
              <p>{item.price}</p>
              
            </div>
            </Link>
          ))
        }
        
    </div>
  )
}

export default Cart