const express = require("express")

//Enable CORS - mechanism that allows restricted resources to be requested from another domain 
//const cors = require("cors")

const app = express()

//app.use(cors())
app.use(express.json())

//app.use("/helixir/home", home)
//app.use ("*", (req,res)=> res.status(404).json({error: "Not found"}))

module.exports = app