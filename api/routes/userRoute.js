const express = require("express");
const {
  test,
  register,
  getAllUser,
  updateUser,
} = require("../controller/useController");

const router = express.Router();
router.route("/test").get(test);
router.route("/register").post(register);
router.route("/getAllUser").post(getAllUser);
router.route("/:id").put(updateUser);

module.exports = router;
