const express = require('express');
const router = express.Router();

// Load TICKET Model
const Ticket = require('../models/ticket');

// GET ALL TICKETS
router.get('/', (req, res) => {
    Ticket.find()
        .then(tickets => res.json(tickets))
        .catch(err => res.sendStatus(404).json("Couldn't get Tickets !!!"))
});

// ADD NEW TICKET
router.post('/', (req, res) => {
    Ticket.create(req.body)
        .then(ticket => res.sendStatus(200))
        .catch(err => res.sendStatus(404).json(err));
});

// UPDATE A TICKET
router.put('/update/:id', (req, res) => {
    Ticket.findByIdAndUpdate(req.params.id)
        .then(res.sendStatus(200))
        .catch(err => res.sendStatus(404).json(err));
})

// DELETE A TICKET
router.delete('/delete/:id', (req, res) => {
    Ticket.findByIdAndDelete(req.params.id)
        .then(res.sendStatus(200))
        .catch(err => res.sendStatus(404).json(err));
})

module.exports = router;