const User = require("../Models/user")
async function handleGetAllUsers(req,res) {
const allDbUsers= await User.find({});
return res.json(allDbUsers);
}

async function handleGetUserById(req,res){
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error: "user not found"});
    return res.json(user);

}

async function handleUpdateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id, {last_name: "sarapova"});
    return res.json({status: "success"});
}

async function handleDeleteUserById(req,res){
    User.findByAndDelete(req.params.id);
    return res.json({status: "success"})

}

async function handleCreateUserById(req,res){
    const body = req.body;
    if(!body||
        !body.first_name ||
        !body.last_name ||
        !body.email||
        !body.gender
    ) {
        return res.status(201).json({msg: "All fields are required"});
}
    
    const result = await User.create({
        first_name:body.first_name,
        last_name:body.last_name,
        gender:body.gender
    })
    console.log("result", result);
return res.status(201).json({msg:"success", id: result,_id})
}
module.exports = {
    handleCreateUserById,
    handleDeleteUserById,
    handleGetAllUsers,
    handleUpdateUserById,
    handleGetUserById
}