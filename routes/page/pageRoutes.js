const router = require("express").Router();
const { BlogPosts, BlogCredentials } = require("../../models");

// Get all posts for homepage
router.get("/", async (req, res) => {
  try {
    const blogposts = await BlogPosts.findAll();
    const posts = blogposts.map((postsdata) => postsdata.get({ plain: true }));
    res.render("homepage", { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get the Login page
router.get("/login", (req, res) => {
  try {
    res.render("loginpage");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get the Signup page
router.get("/signup", (req, res) => {
  try {
    res.render("signuppage");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
