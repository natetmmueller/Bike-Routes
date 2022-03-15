let express = require('express');
const auth = require('../controllers/auth');
const {validationResult} = require ('express-validator')
const passport = require('passport')

const router = express.Router();

const authCtrl = require('../controllers/auth')

router.get('/auth/signup', authCtrl.signUp)

router.post('/auth/signup', authCtrl.authCreate)

router.get('/auth/signin', authCtrl.loginPage)
router.post('/auth/signin', passport.authenticate('local', {
    successRedirect:'/routes/all',
    failureRedirect:'/auth/signin'
}))



module.exports = router