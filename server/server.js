// Configure Express
const express = require('express');
const app = express();
app.use(express.json({ extended: false }));

// Configure Cors
var cors = require('cors');
app.use(cors({ origin: true, credentials: true }));

// Configure dotenv
require('dotenv').config();

// Connect to Database
const connectDB = require('./db');
connectDB();

// Load Routes
const bus = require ('./routes/bus_routes');

// Initialize Routes
app.use('/bus', bus);

// Listening to PORT defined in the .env file
app.listen(process.env.PORT, () => console.log('SERVER RUNNING ON PORT : ' + process.env.PORT));