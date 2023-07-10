const router = require('express').Router();
const { BlogCredentials, BlogPosts, BlogComments } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await BlogCredentials.create({
      username: req.body.username,
      password: req.body.password,
    });
    console.log(dbUserData);

    req.session.save(() => {
      req.session.user_id = dbUserData.dataValues.id;
      req.session.username = dbUserData.dataValues.username;
      req.session.loggedIn = true;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Login route
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await BlogCredentials.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.dataValues.id;
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Logout route
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



//Add comments route
router.post('/comments', async (req, res) => {
  try {
    console.log(req.body);
    console.log('inside route');
    const dbUserData = await BlogComments.create({
      comment: req.body.comments,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
    });
    res.status(200).json(dbUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
