const { Router } = require("express");
const {
  registrationUser,
  loginUser,
  checkUser,
} = require("../controllers/userController");
const router = new Router();

router.post("/registration", registrationUser);
router.post("/login", loginUser);
router.get("/auth", checkUser);

module.exports = router;
