const router = require('express').Router();
const { BlogPosts, BlogCredentials, BlogComments } = require('../../models');

// Get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const blogposts = await BlogPosts.findAll();
    const posts = blogposts.map((postsdata) => postsdata.get({ plain: true }));
    for (var i = 0; i < posts.length; i++) {
      const username = await BlogCredentials.findOne({
        where: {
          id: posts[i].user_id,
        },
        attributes: { exclude: ['password'] },
      });
      const postDate = posts[i].createdAt.toLocaleDateString();
      posts[i].createDate = postDate;
      posts[i].username = username.dataValues.username;
    }

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get the Login page
router.get('/login', (req, res) => {
  try {
    res.render('loginpage');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get the Signup page
router.get('/signup', (req, res) => {
  try {
    res.render('signuppage');
  } catch (err) {
    res.status(500).json(err);
  }
});

//get posts by id to update comments
router.get('/post/:id', async (req, res) => {
  try {
    const postbyid = await BlogPosts.findByPk(req.params.id, {
      include: [{ model: BlogCredentials }],
    });
    if (postbyid) {
      const post = postbyid.get({ plain: true });
      post.createdAt = post.createdAt.toLocaleDateString();
      res.render('comment', { post, loggedIn: req.session.loggedIn });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
