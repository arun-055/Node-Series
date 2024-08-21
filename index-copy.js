const express= require("express")
const app = express();
const port = 3000;
const fs = require('fs');
const users = require("./MOCK_DATA.json");
const { connectMongoDb } = require("./connection");

//connection
connectMongoDb("url/youutbe-1pp-1")
.then((res)=>{console.log("mng conncted")})
.catch((err)=>{console.log("mongo err"),err})

