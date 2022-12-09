const { Router } = require("express");
const { createType, getAllTypes } = require("../controllers/typeController");
const router = new Router();
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), createType);
router.get("/", getAllTypes);

module.exports = router;
