const { Router } = require("express");
const router = Router();
const { UserController } = require("../controllers/user.controller");
const userController = new UserController();


router.post("/",userController.create)
router.get("/", userController.getAll);
router.get("/:id", userController.getOne);
router.put("/:id",userController.update);
router.put("/reactivate/:id", userController.reactivate);
router.delete("/:id", userController.delete);

module.exports = router;
