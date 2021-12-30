const mongoose = require('mongoose')

// const url ='mongodb+srv://keeng:keeng@keengarthur.sum6w.mongodb.net/student?retryWrites=true&w=majority'

const connectDb = (url) =>{
    return mongoose.connect(url)
}
 


module.exports = connectDb