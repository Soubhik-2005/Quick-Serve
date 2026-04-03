const Resturent = require("../models/resturent.model");

async function getAllResturents(req, res) {
    try{
        const resturents = await Resturent.find();
        res.status(200).json({resturents});
    } catch (error) {
        res.status(500).json({message: "Error fetching resturents", error});
    }
}

module.exports = {getAllResturents};