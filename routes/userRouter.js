const express = require("express")

const router = express.Router();

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: "success",
    message: "Route not yet defined",
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: "success",
    message: "Route not yet defined",
  });
};

const updateUser = (res, req) => {
  res.status(500).json({
    status: "success",
    message: "Route not yet defined",
  });
};

const deleteUser = (res, req) => {
  res.status(500).json({
    status: "success",
    message: "Route not yet defined",
  });
};

const showUser = (res, req) => {
  res.status(500).json({
    status: "success",
    message: "Route not yet defined",
  });
};

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").patch(updateUser).delete(deleteUser).get(showUser);


module.exports = router;