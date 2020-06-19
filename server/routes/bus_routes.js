const express = require('express');
const router = express.Router();

// Load Bus Model
const Bus = require('../models/bus');

// GET ALL BUSSES
router.get('/', (req, res) => {
    Bus.find()
        .then(busses => res.json(busses))
        .catch(err => res.sendStatus(404).json("Couldn't get Busses!!!"))
});

// ADD NEW BUS
router.post('/', (req, res) => {
    Bus.create(req.body)
        .then(bus => res.sendStatus(200))
        .catch(err => res.sendStatus(404).json(err));
});

// UPDATE A BUS
router.put('/update/:id', (req, res) => {
    Bus.findByIdAndUpdate(req.params.id)
        .then(res.sendStatus(200))
        .catch(err => res.sendStatus(404).json(err));
})

// DELETE A BUS
router.delete('/delete/:id', (req, res) => {
    Bus.findByIdAndDelete(req.params.id)
        .then(res.sendStatus(200))
        .catch(err => res.sendStatus(404).json(err));
})

module.exports = router;