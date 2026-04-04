const Cart = require("../models/cart.model");

async function addToCart(req, res) {
  try {
    const { productId, name, price, image, description } = req.body;
    const userId = req.userId;
    
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [
          {
            productId,
            price,
            name,
            image,
            quantity:0,
            description
          },
        ],
      });
    }
    // console.log(cart);

    const existingItem = cart.items.find(
      (item) => item.productId === productId,
    );
    console.log(existingItem);

    if (existingItem) {
      existingItem.quantity = Number(existingItem.quantity) +1;
      cart.totalItems = Number(cart.totalItems) +1 ;
      cart.totalPrice += Number(existingItem.price)  ;
      await cart.save();
    } else {
      cart.items.push({ productId, name, image, price, quantity: 1, description });
      cart.totalItems += 1;
      cart.totalPrice = Number(cart.totalPrice) + Number(price);
      await cart.save();
    }

    return res.status(201).json({ message: "Item added to cart successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function getCart(req, res) {
  try {
    const userId = req.userId;
    const cart = await Cart.findOne({ userId });
    console.log(cart);
    return res
      .status(200)
      .json(cart || { items: [], totalItems: 0, totalPrice: 0 });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { addToCart, getCart };
