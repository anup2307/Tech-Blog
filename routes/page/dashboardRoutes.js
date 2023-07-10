const router = require('express').Router();
const { BlogPosts } = require('../../models');
const withAuth = require('../../utils/auth');

//dashboard route to display all the posts after logged in
router.get('/', withAuth, async (req, res) => {
  try {
    const dbPosts = await BlogPosts.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const posts = dbPosts.map((post) => post.get({ plain: true }));
    posts.forEach((post) => {
      const postDate = post.createdAt.toLocaleDateString();
      post.createDate = postDate;
    });
    console.log(posts);
    res.render('dashboard', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//new post route
router.get('/new', withAuth, async (req, res) => {
  try {
    res.render('newpost', { loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get 1 post based on the id for updating or deleting
router.get('/:id', async (req, res) => {
  try {
    const postbyid = await BlogPosts.findByPk(req.params.id);

    const post = postbyid.get({ plain: true });
    console.log(post);
    res.render('postsupdate', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
