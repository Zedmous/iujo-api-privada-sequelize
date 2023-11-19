const { Router } = require("express");
const router = Router();
const { AuthController } = require("../controllers/auth.controller");
const authController = new AuthController();

router.post("/login", authController.login);

module.exports = router;
