const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 3000;
const users = require("./MOCK_DATA.json");
//middleware-plugin
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("hello middlewire 1");
  // res.json({msg: "hello system "});//to end resopnse from here
  next();
});

app.use((req, res, next) => {
  fs.appendFile(
    "./log.txt",
    ` ${Date.now()} ${req.method}: ${req.ip}: ${req.path}`,
    (err, data) => {
      next();
    }
  );
});

app.use((req, res, next) => {
  console.log("hello middlewire 1");
  res.end("stopped from here");
});
//level 1 // level 2

app.use(express.json());
//Routes
app.get("/api/users", (req, res) => {
  return res.json(users);
});
app.get("/users", (req, res) => {
  const html = `
    <ol>
    ${users.map((user) => `<li>${user.last_name}</li>`).join("")}
    </ol> `;
  res.send(html);
});
// //REST API
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});
app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  console.log("body", body);
  fs.writeFile("/MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length });
  });
});
// app.patch("/api/users", (req, res) => {
//   return res.status({ status: "pending" });
// });

app.listen(PORT, () => {
  console.log("server started");
});
