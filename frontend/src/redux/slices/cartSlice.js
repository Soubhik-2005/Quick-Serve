 import {createSlice} from "@reduxjs/toolkit"
 
const initialState ={
    items:[],
    totalItems :0,
    totalPrice:0,
}

 const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers:{
    setCart:(state, action) =>{
      // console.log(action.payload.items[0].image);
      state.items = action.payload.items;
      state.totalItems = action.payload.totalItems;
      state.totalPrice = action.payload.totalPrice;

    }
  }
 })

 export default cartSlice.reducer;
 export const {setCart} = cartSlice.actions