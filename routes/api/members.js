const router = require("express").Router();
const membersController = require("../../controller/MembersControllers");

router.route("/")
  .get(membersController.findAllMembers)
  .post(membersController.createNewMember)

// router.route("/:id")
//   .get(membersController.findMemberById)
//   .delete(membersController.removeMemberById)
//   .put(membersController.updateMember)
  
module.exports = router;