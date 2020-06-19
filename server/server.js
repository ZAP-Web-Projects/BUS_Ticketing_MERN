// Configure Express
const express = require('express');
const app = express();

// Configure dotenv
require('dotenv').config();

// Listening to PORT defined in the .env file
app.listen (process.env.PORT, () => console.log('SERVER RUNNING ON PORT : ' + process.env.PORT));