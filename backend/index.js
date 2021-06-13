
const mongodb = require("mongodb")
const dotenv = require("dotenv")
//const mongoose = require ('mongoose')

dotenv.config()


const express = require("express")

//Enable CORS - mechanism that allows restricted resources to be requested from another domain 
//const cors = require("cors")
//app.use(cors())

const app = express()
const MongoClient = mongodb.MongoClient
const port = process.env.PORT || 5000

app.use(express.json())
module.exports = app

MongoClient.connect(
    process.env.HELIXIR_URI,
    {
        wtimeout: 2500,
        useNewUrlParse: true,
    },
  
    async client=>{
        app.listen(port, ()=>{
            console.log(`listening on port ${port}`)
        })
    }
)

//app.use("/helixir/home", home)
//app.use ("*", (req,res)=> res.status(404).json({error: "Not found"}))
