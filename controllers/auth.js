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
    res.redirect('/auth/signin')
}

function loginPage(req, res){
    res.render('auth/login')
}


//get- logout

function logout(req,res){
    req.logout()
    res.redirect('/')
}

module.exports = {
    signUp: authSignUp,
    authCreate,
    loginPage,
    logout
}