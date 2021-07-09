// const Model = require('../Model/')
const Model = require('../Model/user1')
const AppError = require('../utils/AppError')
const  CatchAsync = require('../utils/CatchAsync')

const mongoose= require('mongoose')


exports.post1=CatchAsync(async(req,res,next)=>{
    console.log('hit')
    const {name} = req.body
    console.log(name) 
    const data = new Model({
        name
        
    }) 
    const data1 = await data.save()
    res.status(201).json({
        message:'success',
        data1 
    })
})


