const express = require("express");
const resturentRouter = express.Router();

const {getAllResturents} = require ("../controllers/resturent.controller");

resturentRouter.get("/", getAllResturents);

module.exports = resturentRouter;