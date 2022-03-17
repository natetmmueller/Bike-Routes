const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    user:Object,
    comment:String
},
{
    timestamps: true
})

const routesSchema = new Schema ({
    routeName: String,
    distance: Number,
    elevation: Number,
    timeItTakes: Number,
    sAddress: String,
    fAddress: String,
    user: String,
    comments: [commentSchema]
},
{
    timestamps: true
});

module.exports = mongoose.model('Routes', routesSchema);
