const Guitar = require('../models/guitarModel')
const mongoose = require('mongoose')


//get all guitars
const getAllGuitars = async (req, res) => {
    try {
        const guitars = await Guitar.find()
        res.status(200).json(guitars)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

//add a new guitar
const addGuitar = async (req, res) => {
    const {brand, type, body, pickups, material, neck, image, owned} = req.body
    try {  
        const guitar = await Guitar.create({brand, type, body, pickups, material, neck, image, owned})
        res.status(200).json(guitar)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

//delete a guitar
const deleteGuitar = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: 'Invalid ID'})
    }

    const guitar = await Guitar.findOneAndDelete({_id:id})

    if(!guitar) {
        res.status(404).json({error: 'Guitar not found'})
    }

    res.status(200).json(guitar)
}

module.exports = {
    addGuitar,
    getAllGuitars,
    deleteGuitar
}