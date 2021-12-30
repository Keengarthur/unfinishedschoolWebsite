const mongoose = require('mongoose')


const scheme = new mongoose.Schema({
    name:String,
    class:String,
    subjects:Object,
    fees:Object


})


module.exports = mongoose.model("student_information",scheme)


// {name:'keeng',
// class:'jss2',
// subjects:{
//     physics:

// }}