const router = require("express").Router();
const { BlogCredentials } = require("../../models");

// CREATE new user
router.post("/", async (req, res) => {
  try {
    console.log("inside post route");
    const dbUserData = await BlogCredentials.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.status(200).json(dbUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
