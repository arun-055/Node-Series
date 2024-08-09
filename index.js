const express = require ("express");
const app = express();
const PORT = 8000;
const users = require("./MOCK_DATA.json")
app.listen(PORT,()=>{console.log("server started")})