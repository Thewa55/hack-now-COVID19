const router = require("express").Router();
const requestController = require("../../controller/RequestControllers");

router.route("/")
  .get(requestController.findAllRequests)
  .post(requestController.createNewRequest)

module.exports = router;