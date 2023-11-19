const { Router } = require("express");
const { RoleController } = require("../controllers/role.controller");
const router = Router();
const roleController = new RoleController();
router.post("/", roleController.create);

router.get("/", roleController.getAll);

router.get("/:id", roleController.getOne);

router.put("/:id", roleController.update);

router.put("/reactivate/:id", roleController.reactivate);

router.delete("/:id", roleController.delete);

module.exports = router;
