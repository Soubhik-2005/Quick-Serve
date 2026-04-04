const express = require('express');
const cors = require('cors');

const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());



const authRouter = require('./routes/auth.route');
const resturentRouter = require('./routes/resturent.route');
const cartRouter = require('./routes/cart.route');

app.use('/api/auth', authRouter);
app.use('/api/resturent', resturentRouter);
app.use('/api/cart', cartRouter);

module.exports = app;