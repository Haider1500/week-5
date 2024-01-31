const { userModel } = require("../db");

const router = require("express").Router();

router.post("/create", async (req, res) => {
  const { name, description, interests } = req.body;
  console.log(name, description, interests);
  console.log("=======interests", interests);
  const user = await userModel.create({
    name,
    description,
    interests,
  });
  res.send(user);
});

router.get("/allUsers", async (req, res) => {
  const user = await userModel.find({}, { _id: 0, __v: 0 });
  console.log(user);
  res.send(user);
});

module.exports = router;
