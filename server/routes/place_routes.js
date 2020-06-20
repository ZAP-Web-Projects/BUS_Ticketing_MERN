const express = require('express');
const router = express.Router();

const Places = require('../models/places');

// GET ALL THE PLACES
router.get('/', (req, res) => {
    Places.find()
        .then(places => res.json(places))
        .catch(err => res.sendStatus(404).json(err))
})

//ADD NEW PLACE
router.post('/', (req, res) => {
    Places.create(req.body)
        .then(places => res.sendStatus(200))
        .catch(err => res.sendStatus(404).json(err))
})

//DELETE A PLACE
router.delete('/delete/:id', (req, res) => {
    Places.findByIdAndDelete(req.params.id)
        .then(res.sendStatus(200))
        .catch(err => res.sendStatus(404).json(err))
})

//UPDATE A PLACE
router.put('/update/:id', (req, res) => {
    Places.findByIdAndUpdate(req.params.id, req.body)
        .then(res.sendStatus(200))
        .catch(err => res.sendStatus(404).json(err))
})

module.exports = router;