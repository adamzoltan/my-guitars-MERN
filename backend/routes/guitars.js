const express = require('express')
const Guitar = require('../models/guitarModel')
const {addGuitar, getAllGuitars, getGuitar, deleteGuitar} = require('../controllers/guitarsController')

const router = express.Router()

//GET all guitars
router.get('/', getAllGuitars)

//GET a single guitar
router.get('/:id', getGuitar)

//POST a new guitar
router.post('/', addGuitar)

//DELETE a guitar
router.delete('/:id', deleteGuitar)

module.exports = router