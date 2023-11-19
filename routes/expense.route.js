const { Router } = require("express");
const { ExpenseController } = require("../controllers/expense.controller");
const router = Router();
const expenseController = new ExpenseController();
router.post("/", expenseController.create);

router.get("/", expenseController.getAll);

router.get("/:id", expenseController.getOne);

router.put("/:id", expenseController.update);

router.put("/reactivate/:id", expenseController.reactivate);

router.delete("/:id", expenseController.delete);

module.exports = router;
