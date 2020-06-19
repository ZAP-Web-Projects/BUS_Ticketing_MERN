const router = require('express').Router();

// Load Bus Model
const Bus = require('../models/bus');

// ADD NEW BUS
router.post('/', (req,res) => {
    Bus.create(req.body)
    .then(bus => res.sendStatus(200).json(bus))
    .catch(err =>  res.sendStatus(404).json(err));
})