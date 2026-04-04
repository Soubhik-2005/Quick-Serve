const Cart = require("../models/cart.model");


async function addToCart(req,res){
    try {
     const {productId} = req.body;
    const userId = req.userId;

    const cart = await Cart.findOne({userId});
    if(!cart){
        const newCart = await Cart.create({
            userId,
            items:[],
            }
        )

        const existingItem = cart.items.find(item => item.productId === productId);

        if(existingItem){
            existingItem.quantity += 1;
            cart.totalItems += 1;
            cart.totalPrice += existingItem.price * existingItem.quantity;
            await newCart.save();
        }
        else{
            newCart.items.push({productId, quantity: 1});
            cart.totalItems += 1;
            cart.totalPrice += existingItem.price;
            await newCart.save();
        }

        return res.status(201).json({message:"Item added to cart successfully"});
    }   
}catch (error) {
    console.error(error);
    return res.status(500).json({message:"Internal server error"});
}
}

async function getCart(req,res){
    try {
        const userId = req.userId;
        const cart = await Cart.findOne({userId});
        if(!cart){
            return res.status(404).json({message:"Cart not found"});
        }
        console.log(cart);
        return res.status(200).json(cart);
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:"Internal server error"});
    }
}

module.exports = {addToCart, getCart};