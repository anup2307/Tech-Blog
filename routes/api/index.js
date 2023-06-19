const router = require("express").Router();

const userRoutes = require("./signupRoute");

router.use("/users", userRoutes);

module.exports = router;
