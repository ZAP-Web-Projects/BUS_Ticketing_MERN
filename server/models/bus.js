const mongoose = require('mongoose');

const BusSchema = new mongoose.Schema({
    bus_id: {
        type: String,
        required: true
    },
    bus_name: {
        type: String,
        required: false
    },
    bus_type: {
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
    seat_qty: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Bus', BusSchema);