const express = require("express");
const {
  registerbloodbank,
  authUser,
  showbloodbanks,
  bloodstockbyid,
} = require("../controllers/bloodbankcontrollers");
const protect = require("../middleware/authmiddleware");
const router = express.Router();
router.route("/").get(showbloodbanks);
router.route("/register").post(registerbloodbank);
router.route("/login").post(authUser);
router.route("/:id").get(bloodstockbyid);
module.exports = router;
