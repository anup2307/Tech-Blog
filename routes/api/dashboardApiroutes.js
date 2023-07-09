const router = require('express').Router();
const { BlogPosts } = require('../../models');

// CREATE new Posts
router.post('/createpost', async (req, res) => {
  try {
    const dbUserData = await BlogPosts.create({
      heading: req.body.heading,
      description: req.body.description,
      user_id: req.session.user_id,
    });
    res.status(200).json(dbUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    console.log(req.params.id, req.session.user_id);
    const data = await BlogPosts.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!data) {
      res.status(404).json({ message: 'No posts found with this id!' });
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/update/:id', async (req, res) => {
  try {
    const data = await BlogPosts.update(
      {
        heading: req.body.heading,
        description: req.body.description,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );
    if (!data) {
      res.status(404).json({ message: 'Update not successfull!' });
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
