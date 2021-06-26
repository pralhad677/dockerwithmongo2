

  
const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    name:{

        type:String,
                required:[true,'name is required']
            },
     age:{
         type:Number
     }       
           
})


const  Model = mongoose.model('User',userSchema)

module.exports = Model