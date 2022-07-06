const express = require('express')
const Guitar = require('../models/guitarModel')
const {addGuitar, getAllGuitars, deleteGuitar} = require('../controllers/guitarsController')

const router = express.Router()

//GET all guitars
router.get('/', getAllGuitars)

//POST a new guitar
router.post('/', addGuitar)

//DELETE a guitar
router.delete('/:id', deleteGuitar)

module.exports = router