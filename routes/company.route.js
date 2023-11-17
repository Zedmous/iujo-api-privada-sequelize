const { Router } = require("express");
const { CompanyController } = require("../controllers/company.controller");
const router = Router();

const companyController = new CompanyController();
router.post("/", companyController.create);

router.get("/", companyController.getAll);

router.get("/:id", companyController.getOne);

router.put("/:id", companyController.update);

router.put("/reactivate/:id", companyController.reactivate);

router.delete("/:id", companyController.delete);

module.exports = router;
