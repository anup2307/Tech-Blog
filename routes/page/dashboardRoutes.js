const router = require('express').Router();
const { BlogPosts } = require('../../models');
const withAuth = require('../../utils/auth');

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

router.get('/new', async (req, res) => {
  try {
    res.render('newpost', { loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

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
