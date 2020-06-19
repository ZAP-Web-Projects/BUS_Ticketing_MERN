const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    date_issued: {
        type: Date,
        required: true
    },
    date_expires: {
        type: Date,
        required: true
    },
    passenger_name: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    bus_id: {
        type: String,
        required: true
    },
    people_covered: {
        type: Number,
        required: true
    }
})

module.exports = mongoose, model('Ticket', TicketSchema);