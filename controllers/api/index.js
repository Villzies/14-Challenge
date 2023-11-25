const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const commentRoutes = require("./comment-routes.js");
const DashboardRoutes = require("./dashboard-routes.js")

router.use("/users", userRoutes);
router.use("/comment", commentRoutes);
router.use("/post", DashboardRoutes);

module.exports = router;