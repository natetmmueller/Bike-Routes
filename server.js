const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const methodOverride = require('method-override')

const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

let session = require('express-session')
let passport = require('./helper/passportConfig')

app.use(methodOverride('_method'))

app.use(session({
    secret: process.env.secret,
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 800000}
}))

app.use(passport.initialize())
app.use(passport.session())

const homeRoute = require('./routes/home');
const routesRoute = require('./routes/routes');
const authRoute = require('./routes/auth');

app.use('/', homeRoute);
app.use('/', routesRoute);
app.use('/', authRoute);

app.set('view engine', 'ejs');

mongoose.connect(process.env.mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
() => {
    console.log('mogodb has connected')
})

app.listen(PORT, () => console.log(`App is running on ${PORT}`));


