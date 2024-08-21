const express = require("express");
const {handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUserById
} = require("../Controllers/user")

const router = express.Router();

// router.get("/", handleGetAllUsers); //bcoz thus line and line 47 both hve same path.
router.route("/")
.get(handleGetAllUsers)
.post(handleCreateUserById)

router.get("/", async (req, res) => {
    const allDbUsers = await User.find({});
    const html = `
      <ol>
      ${allDbUsers.map((user) => `<li>${user.last_name}-${user.email}</li>`).join("")}
      </ol> `;
    res.send(html);
  });
  router.get("/", async (req,res) => {
    const allDbUsers = await User.find({});
  
    res.setHeader("X-MyName", "Arun kumar Nath");
    return res.json(allDbUsers)
  })
  
  
  // //REST API
  /* router.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  }); */
  router.
  route("/:id")
  .get(handleGetUserById)
  
  .patch(handleUpdateUserById)

  .delete(handleDeleteUserById)
  
  
  //router.post("/",handleCreateUserById)
  
  
  
  /* router.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    console.log("body", body);
    fs.writeFile("/MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.status(201).json({ status: "success", id: users.length });
    });
  }); */
  
  // router.patch("/api/users", (req, res) => {
  //   return res.status({ status: "pending" });
  // });

  module.exports= router;