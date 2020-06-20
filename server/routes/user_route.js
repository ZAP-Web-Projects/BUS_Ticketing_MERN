// Configure dotenv
require('dotenv').config();

//Secret Key from .env file
const secret = process.env.SECRET_KEY;

const router = require('express').Router();

// Configure JSON Web Token
const jwt = require('jsonwebtoken');

//Import Users model
const users = require('../models/users');

//Get all users
router.get('/', (req, res) => {
    users.find()
        .then(users => res.json(users))
        .catch(err => res.sendStatus(404).json(err))
})

//Add new user
router.put('/', (req, res) => {
    users.create(req.body)
        .then(res.send(200))
        .catch(err => res.sendStatus(404).json(err))
})

//Delete a user
router.delete('/delete/:id', (req, res) => {
    users.findByIdAndRemove(req.params.id)
        .then(res.sendStatus(200))
        .catch(err => res.sendStatus(404).json(err))
})

//Update a user
router.put('/update/:id', (req, res) => {
    users.findByIdAndUpdate(req.params.id, req.body)
        .then(res.sendStatus(200))
        .catch(err => res.sendStatus(404).json(err))
})

// Sign in autheticateiong
router.post('/authenticate/', (req, res) => {
    const { username, password } = req.body;
    users.findOne({ username }, (err, user) => {
        if (err) {
            console.error(err);
            res.status(500)
                .json({ error: "Internal Error. Please try again" })
        }
        else if (!user) {
            res.status(401).json({ error: "Incorrect Email or Password" })
        }
        else {
            user.iscorrectpassword(password, (err, same) => {
                if (err) {
                    res.status(500).json(error: "Internal Error. Please try again.")
                }
                else if (!same) {
                    res.status(401).json(error: "Incorrect Email or Password")
                }
                else {
                    // Issue JSON Web Token
                    const payload = { username };
                    const token = jwt.sign(payload, secret, { expiresIn: '1h' });
                    res.cookie('token', token, { httpOnly: true }).sendStatus(200);
                }
            })
        }
    })
})

module.exports = router;