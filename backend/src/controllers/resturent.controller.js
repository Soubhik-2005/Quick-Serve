const Resturent = require("../models/resturent.model");

async function getAllResturents(req, res) {
    try{
        const resturents = await Resturent.find();
        res.status(200).json({resturents});
    } catch (error) {
        res.status(500).json({message: "Error fetching resturents", error});
    }
}

async function getResturentById(req, res) {
    const {id} = req.params;
    try{
        const resturent = await Resturent.findById(id);
        if(!resturent){
            return res.status(404).json({message: "Resturent not found"});
        }
        res.status(200).json({resturent});
    } catch (error) {
        res.status(500).json({message: "Error fetching resturent", error});
    }
}

module.exports = {getAllResturents, getResturentById};