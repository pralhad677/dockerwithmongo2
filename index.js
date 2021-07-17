const mongoose  = require('mongoose')
const dotenv = require('dotenv')
const express = require('express')
const app = express()
const router = require('./router/user') 
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

dotenv.config({path:'./dot.env'})
 
// console.log(process.argv) 

if(process.env.NODE_ENV === 'development'){
    console.log('development mode')
}
else {
    console.log('production mode') 
}

 
const server = process.env.PORT;

   

app.use('/',router)
 
function connectionRetry(){
// root:example@   ?authSource=admin' 
 
mongoose.connect('mongodb://root:example@mongo2:27017/docker2?authSource=admin',{useNewUrlParser: true,useFindAndModify:false,useUnifiedTopology: true })
// mongoose.connect('mongodb://localhost:27017/docker2',{useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>{
app.listen(server,()=>{   
        console.log(`connected to port at ${process.env.PORT}`)   
    }) 
}) 
.catch(err=>{
    console.log(err)
    // setTimeout(()=>{ 
    //     connectionRetry()
    // },2000)
})
}

connectionRetry()
process.on('unhandledRejection',(err) => { 
    console.log(err.name,err.message); 
    process.exit(1);
}); 
