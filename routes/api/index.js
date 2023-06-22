const router = require("express").Router();

const userRoutes = require("./signupRoute");
const dashboardRoutes = require("./dashboardApiroutes");

router.use("/users", userRoutes);
router.use("/dashboard",dashboardRoutes);

module.exports = router;
