 import axios from "axios"
 

 
 
 export async function addCart(item,id) {
    
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/cart/add",
        {
          productId: item._id,
          resturentId:id,
          name: item.name,
          price: item.price,
          image: item.image,
          description: item.description,
        },
        { withCredentials: true },
      );

      return data;
      

      // console.log("cart add");
    } catch (err) {
      console.log("Error in addCart" + err);
      throw err;
    }
  }
  
 
 export async function decreament(item){
  try{
    const {data} = await axios.post("http://localhost:8000/api/cart/decreament",{
      productId:item._id,
      price:item.price
    },
  {
    withCredentials:true
  })
  return data;
  }catch(err){
    console.log(err);
    throw err;
  }
 }

