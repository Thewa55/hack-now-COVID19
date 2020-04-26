const router = require("express").Router();
const membersRoutes = require("./members");
const requestRoutes = require("./request")

router.use("/members", membersRoutes);
router.use("/request", requestRoutes)

module.exports = router;