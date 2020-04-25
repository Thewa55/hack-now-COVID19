const router = require("express").Router();
const membersRoutes = require("./members");


router.use("/members", membersRoutes);

module.exports = router;