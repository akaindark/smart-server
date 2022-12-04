const { Router } = require("express");
const {
  createDevice,
  getAllDevice,
  getOneDevice,
} = require("../controllers/deviceController");
const router = new Router();

router.post("/", createDevice);
router.get("/", getAllDevice);
router.get("/:id", getOneDevice);

module.exports = router;
