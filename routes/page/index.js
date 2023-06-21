const router = require('express').Router();

const homePageroutes = require('./homePageroutes');
const dashboardRoutes = require('./dashboardRoutes')

router.use('/', homePageroutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;