const router= require("express").Router();
const apiRoutes= require("./api/index");
const homeRoutes= require("./homeRoutes");
const dashboardRoutes= require("./dashboardRoutes");

router.use("/", homeRoutes);
router.use("/dashbaord", dashboardRoutes);
router.use("/api", apiRoutes);

module.exports = router;