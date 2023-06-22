const router = require("express").Router();
const { BlogPosts } = require("../../models");

router.get("/", async (req, res) => {
  try {
    console.log("id", req.session.userid);
    const dbPosts = await BlogPosts.findAll({
      where: {
        user_id: 3,
      },
    });
    console.log("posts", dbPosts);
    const posts = dbPosts.map((post) => post.get({ plain: true }));
    res.render("dashboard", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/new", async (req, res) => {
  try {
    res.render("newpost", { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
