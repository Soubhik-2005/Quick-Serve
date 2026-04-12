const mongoose = require("mongoose");


const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: String,
        image:String,
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
    totalItems: {
      type: Number,
      default: 0,
    },
    totalPrice: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
