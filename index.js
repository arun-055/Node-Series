const express = require("express");
const app = express();
//const fs = require("fs");
const PORT = 3000;
//const users = require("./MOCK_DATA.json");

const {} = require("./connection");
const userRouter = require("./Routes/user");
const { logReqRes } = require("./middlewares");

//connection
/* connectMongoDb("mongodb://127.0.0.1:27017/youtube_app1")
  .then(() => console.log("mongoDb connected"))
  .catch((err) => console.log("Mongo Error", err)); */
//schema
const User = mongoose.model("user", userSchema);
//middleware-plugin
app.use(express.urlencoded({ extended: false }));

/* app.use((req, res, next) => {
  console.log("hello middlewire 1");
  // res.json({msg: "hello system "});//to end resopnse from here
  next();
}); */
app.use(logReqRes("log.txt"));

app.use((req, res, next) => {
  console.log("hello middlewire 2");
  //res.end("stopped from here");
  next();
});
//level 1 // level 2

//app.use(express.json());
//Routes

//Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log("server started");
});
