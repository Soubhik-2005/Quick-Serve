const Cart = require("../models/cart.model");

async function addToCart(req, res) {
  try {
    const { productId, name, price, image, description,resturentId } = req.body;
    const userId = req.userId;
    // console.log(price);

    let cart = await Cart.findOne({ userId });
    
    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [],
        image,
      
        totalItems: 0,
        totalPrice: 0,
      });
    }
    console.log(cart.items);
    console.log("---------------------");

    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId.toString(),
    );

    if (existingItem) {
      existingItem.quantity = Number(existingItem.quantity) + 1;
// console.log(cart);
      existingItem.price = Number(existingItem.price) + Number(price);
    } else {
      cart.items.push({
        productId,
        name,
        image,
        resturentId,
        price,
        description,
        quantity: 1,
      });
    }
    cart.totalItems = Number(cart.totalItems) + 1;
    cart.totalPrice +=  Number(price);
    await cart.save();

    // console.log("-----------------------");
    // console.log("cart", cart);
    // console.log("-----------------------");

    return res.status(201).json(cart);
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
    return res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function decreament(req, res) {
  try {
    const { productId, price } = req.body;
    
    const userId = req.userId;
    const cart = await Cart.findOne({ userId });
    // console.log(cart);
    
    const item = cart.items.find((i) => i.productId == productId);
    // console.log(item);
    // console.log("elem", elem);
    // console.log("--------------------------");
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      cart.items = cart.items.filter((i) => i.productId != productId);
    }
    item.price -= price;
    cart.totalItems -=1;
    cart.totalPrice -= price;
    // console.log(item)
    await cart.save();
    console.log(cart);

    return res.status(200).json(cart);
  } catch (error) {
    return res.status(400).json(error);
  }
}

module.exports = { addToCart, getCart, decreament };
