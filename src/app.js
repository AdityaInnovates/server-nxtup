const express  = require('express')
const app = express()
require('dotenv').config()

app.get('/',(req,res)=>{
    res.send("Hello!")
})

const PORT = process.env.PORT||5555
console.log(process.env.PORT)
app.listen(PORT,()=>{
    console.log(`Running at ${PORT}`)
})

