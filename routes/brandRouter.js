const { Router } = require("express");
const { createBrand, getAllBrands } = require("../controllers/brandController");
const router = new Router();

router.post("/", createBrand);
router.get("/", getAllBrands);

module.exports = router;
