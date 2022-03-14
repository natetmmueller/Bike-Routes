const express = require('express');

const router = express.Router();

const homeCntrl = require('../controllers/home');

router.get('/', homeCntrl.home_get);










module.exports= router