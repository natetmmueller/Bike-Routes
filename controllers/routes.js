let Routes = require('../models/Routes')

async function get(req, res){
    let routes = await Routes.find({})
    res.render('routes/allRoutes', {routes})
}

function newRoutesForm(req, res){
    res.render('routes/addRoute')
}

async function addRoute (req, res){
    console.log(req.body)
    req.body.user = req.user._id
    await Routes.create(req.body)
    res.redirect('/routes/all')
}

async function showRoute(req, res){
    let routes = await Routes.findById(req.params.id).populate('user')
    res.render('routes/showRoute', {routes})
}

async function addComment(req, res) {
    console.log(req.user)
    req.body.user = req.user
    let route = await Routes.findById(req.params.id)
    route.comments.push(req.body)
    await route.save()
    res.redirect(`/routes/${req.params.id}`)
}

async function getEdit(req, res){
   let routes =  await Routes.findById(req.params.id)
        res.render('routes/editRoutes', {routes})
}

async function postEdit(req, res) {
    console.log(req.body)
   let update = await Routes.findByIdAndUpdate(req.body.id, req.body)
   console.log(`its working ${update}`)
    res.redirect("/routes/all")

}

async function deleteRoute(req, res) {
    await Routes.findByIdAndDelete(req.params.id)
    res.redirect("/routes/all")
    
}

module.exports = {
    get,
    new: newRoutesForm,
    addRoute,
    showRoute,
    addComment,
    getEdit,
    postEdit,
    deleteRoute,
    
}