const express = require("express");
const { addToCart, getCart } = require("../controllers/cart.controller");
const cartRouter = express.Router();

cartRouter.post("/add", addToCart);
cartRouter.get("/get", getCart);

module.exports = cartRouter;