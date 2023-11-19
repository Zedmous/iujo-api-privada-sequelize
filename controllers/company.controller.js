const { response, request } = require("express");
const { CompanyModel } = require("../utils/sequelize.utils");

class CompanyController {
  create = async (req = request, res = response) => {
    try {
      const company = await CompanyModel.create({
        ...req.body,
      });
      return res.status(201).json(company);
    } catch (error) {
      throw new error();
    }
  };
  getAll = async (req = request, res = response) => {
    try {
      const companies = await CompanyModel.findAll();
      let total = companies.length;
      return res.status(200).json({ total, companies });
    } catch (error) {
      throw new error();
    }
  };
  getOne = async (req = request, res = response) => {
    const { id } = req.params;
    try {
      const company = await CompanyModel.findByPk(Number(id));
      return res.status(200).json(company);
    } catch (error) {
      throw new error();
    }
  };

  update = async (req = request, res = response) => {
    const { id } = req.params;
    try {
      const company = await CompanyModel.update(
        {
          ...req.body,
        },
        {
          where: {
            id,
          },
        }
      );
      return res.status(20).json(company);
    } catch (error) {
      throw new error();
    }
  };
  reactivate = async (req = request, res = response) => {
    const { id } = req.params;
    try {
      const company = await CompanyModel.update(
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
      return res.status(200).json(company);
    } catch (error) {
      throw new error();
    }
  };
  delete = async (req = request, res = response) => {
    const { id } = req.params;
    try {
      const company = await CompanyModel.update(
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
      return res.status(200).json(company);
    } catch (error) {
      throw new error();
    }
  };
}
module.exports = {
  CompanyController,
};
