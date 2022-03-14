let User = require('../models/User')
let bcrypt = require('bcrypt')
let passport = require('passport')
let salt = 14


//get sign up
function authSignUp(req, res){
    res.render('auth/signup')
}

async function authCreate(req, res) {
    let user = await User(req.body)

    let hash = await bcrypt.hashSync(req.body.password, salt)
    console.log(hash)

    user.password = hash

    await user.save()
    res.redirect('/')
}

function loginPage(req, res){
    res.render('auth/login')
}
//post sign in
function login(req, res){
    console.log('im inside my login func')
    passport.authenticate('local', {
        successRedirect:'/routes/allRoutes',
        failureRedirect:'/auth/login'
    })
}

//get- logout

module.exports = {
    signUp: authSignUp,
    authCreate,
    loginPage,
    login
}