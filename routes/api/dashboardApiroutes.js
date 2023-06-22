const router = require("express").Router();
const { BlogPosts } = require("../../models");

// CREATE new Posts
router.post("/", async (req, res) => {
  try {
    const dbUserData = await BlogPosts.create({
      heading: req.body.heading,
      description: req.body.description,
      user_id: req.session.userid,
    });
    res.status(200).json(dbUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
