const express = require("express");
const resturentRouter = express.Router();

const {getAllResturents, getResturentById} = require ("../controllers/resturent.controller");

resturentRouter.get("/", getAllResturents);
resturentRouter.get("/:id", getResturentById);

module.exports = resturentRouter;