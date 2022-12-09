const { Router } = require("express");
const router = new Router();
const {
  registrationUser,
  loginUser,
  checkUser,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/registration", registrationUser);
router.post("/login", loginUser);
router.get("/auth", authMiddleware, checkUser);

module.exports = router;
