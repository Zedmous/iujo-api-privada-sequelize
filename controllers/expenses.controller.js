const { response, request } = require("express");
const { ExpenseModel } = require("../utils/sequelize.utils");

class ExpenseController {
  create = async (req = request, res = response) => {
    try {
      const expense = await ExpenseModel.create({
        ...req.body,
      });
      return res.status(201).json(expense);
    } catch (error) {
      throw new error();
    }
  };
  getAll = async (req = request, res = response) => {
    try {
      const expenses = await ExpenseModel.findAll();
      let total = expenses.length;
      return res.status(200).json({ total, expenses });
    } catch (error) {
      throw new error();
    }
  };
  getOne = async (req = request, res = response) => {
    const { id } = req.params;
    try {
      const expense = await ExpenseModel.findByPk(Number(id));
      return res.status(200).json(expense);
    } catch (error) {
      throw new error();
    }
  };

  update = async (req = request, res = response) => {
    const { id } = req.params;
    try {
      const expense = await ExpenseModel.update(
        {
          ...req.body,
        },
        {
          where: {
            id,
          },
        }
      );
      return res.status(20).json(expense);
    } catch (error) {
      throw new error();
    }
  };
  reactivate = async (req = request, res = response) => {
    const { id } = req.params;
    try {
      const expense = await ExpenseModel.update(
        {
          status: false,
          deletedAt: null,
        },
        {
          where: {
            id,
          },
        }
      );
      return res.status(200).json(expense);
    } catch (error) {
      throw new error();
    }
  };
  delete = async (req = request, res = response) => {
    const { id } = req.params;
    try {
      const expense = await ExpenseModel.update(
        {
          status: true,
          deletedAt: new Date(),
        },
        {
          where: {
            id,
          },
        }
      );
      return res.status(200).json(expense);
    } catch (error) {
      throw new error();
    }
  };
}
module.exports = {
  ExpenseController,
};
