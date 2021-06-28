// const Model = require('../Model/')
const Model = require('../Model/user')
const AppError = require('../utils/AppError')
const  CatchAsync = require('../utils/CatchAsync')
const faker = require('faker')
const mongoose= require('mongoose')

exports.post=CatchAsync(async(req,res,next)=>{
    
    // const {name} = req.body
    // console.log(name) 
    const data = new Model({
        name:faker.name.findName() 
       
    }) 
    const data1 = await data.save()
    res.status(201).json({
        message:'success',
        data1 
    })
})
exports.update=CatchAsync(async(req,res,next)=>{
    //update chai last ko vairxa
    const {id} = req.query
    console.log('id',id)
    
if( mongoose.Types.ObjectId.isValid(id) ) console.log( 'true');
    const data = await Model.findByIdAndUpdate({_id:id},{age:23},{new:true,runValidators:true})
    console.log(data)
    res.status(200).json({
        success:true, 
        data
    })
})
exports.delete = CatchAsync(async(req,res,next)=>{
    //delete chai first ko vairaxa 
    const allData =await Model.deleteOne({}) 
    res.status(301).json({
        message:'deleted',
        allData
    })
})

exports.get=CatchAsync(async(req,res,next)=>{

    const allData =await Model.find() 
    console.log('allData',allData)
    res.status(200).json({
        message:'success',
        allData,
        name:"mero naam jacob ryan ho",
        age:23,
        location:"ktm"
    })
})