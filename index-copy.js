const express= require("express")
const app = express();
const port = 3000;
const fs = require('fs');
const users = require("./MOCK_DATA.json");
const { connectMongoDb } = require("./connection");
const { default: mongoose } = require("mongoose");

//connection
connectMongoDb("url/youutbe-1pp-1")
.then((res)=>{console.log("mng conncted")})
.catch((err)=>{console.log("mongo err"),err})

//schema
mongoose.model("user",userSchema);
app.use(express.urlencoded({extended:false}))

//connection.js
const mongoose = require("mongoose")
async function  connectMongoDb("url") {
    return mongoose.connect(url);
}
module.exports = {
    connectMongoDb
}
