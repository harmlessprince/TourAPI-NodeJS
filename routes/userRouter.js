const express = require("express");

const router = express.Router();

const userController = require("./../controllers/userController");

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route("/:id")
  .patch(userController.updateUser)
  .delete(userController.deleteUser)
  .get(userController.showUser);

module.exports = router;
