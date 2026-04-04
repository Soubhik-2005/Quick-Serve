const express = require("express");
const { addToCart, getCart } = require("../controllers/cart.controller");
const cartRouter = express.Router();
const currentUser = require("../middlewares/auth.middleware")

cartRouter.post("/add",currentUser, addToCart);
cartRouter.get("/get",currentUser, getCart);

module.exports = cartRouter;