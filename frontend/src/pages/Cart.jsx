import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setCart } from '../redux/slices/cartSlice';
import axios from "axios"


function Cart() {
  const dispatch = useDispatch();

  useEffect(()=>{
    async function fetchCart(){
      const {data} = await axios.get("http://localhost:8000/api/cart/get",{
        withCredentials:true
      })
      // console.log(data)
      dispatch(setCart(data));

    }
    fetchCart();

  },[dispatch])

  const items = useSelector(state => state.cart)
  

  return (  
    <div>
        {
          items.items.map((item)=>(
            <div key={item._id} className="border border-black-400 rounded-lg p-4 m-4">
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
            </div>
          ))
        }
        
    </div>
  )
}

export default Cart