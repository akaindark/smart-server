const { Router } = require("express");
const { createType, getAllTypes } = require("../controllers/typeController");
const router = new Router();

router.post("/", createType);
router.get("/", getAllTypes);

module.exports = router;
