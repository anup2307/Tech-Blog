const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    res.render("dashboard");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new", async (req, res) => {
  try {
    res.render("newdpost");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
