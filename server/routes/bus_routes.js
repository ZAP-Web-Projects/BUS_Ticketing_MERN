const express = require('express');
const router = express.Router();

// Load Bus Model
const Bus = require('../models/bus');

// GET ALL BUSSES
router.get('/api', (req,res) => {
    Bus.find()
    .then(busses => res.json(busses))
    .catch(err => res.sendStatus(404).json("Couldn't get Busses!!!"))
});

// ADD NEW BUS
router.post('/api', (req,res) => {
    Bus.create(req.body)
    .then(bus => res.sendStatus(200))
    .catch(err =>  res.sendStatus(404).json(err));
});

module.exports = router;