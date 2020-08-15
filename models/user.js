var mongoose = require('mongoose');
var Schema = mongoose.Schema;




const userscehma = mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    }
})


module.exports = mongoose.model('User', userscehma)
