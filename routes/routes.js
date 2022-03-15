const express = require('express');


const router = express.Router();



const routesCntrl = require('../controllers/routes');
const isLoggedIn = require('../helper/isLoggedIn');

//routes

router.get('/routes/all', routesCntrl.get);

router.get('/routes/new', isLoggedIn, routesCntrl.new);

router.post('/routes/all', isLoggedIn, routesCntrl.addRoute);

router.put('/routes/all', routesCntrl.postEdit);

router.get('/routes/delete/:id', routesCntrl.deleteRoute);

router.get('/routes/edit/:id',routesCntrl.getEdit);

router.get('/routes/:id', isLoggedIn, routesCntrl.showRoute);

router.post('/routes/:id/comments', isLoggedIn, routesCntrl.addComment)

//add this to 12, 14, 16, 18: isLoggedIn,

module.exports = router;