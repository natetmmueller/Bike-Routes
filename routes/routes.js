const express = require('express');

const router = express.Router();

const routesCntrl = require('../controllers/routes');
const isLoggedIn = require('../helper/isLoggedIn');

//routes

router.get('/routes/all', routesCntrl.get);

router.get('/routes/new', isLoggedIn, routesCntrl.new);

router.post('/routes/all', isLoggedIn, routesCntrl.addRoute);

router.get('/routes/:id',isLoggedIn, routesCntrl.showRoute);

router.post('/routes/:id/comments', isLoggedIn, routesCntrl.addComment)


module.exports = router;