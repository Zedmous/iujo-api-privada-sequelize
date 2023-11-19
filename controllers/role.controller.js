const { response, request } = require("express");
const { RoleModel } = require("../utils/sequelize.utils");

class RoleController {
  create = async (req = request, res = response) => {
    try {
      const role = await RoleModel.create({
        ...req.body,
      });
      return res.status(201).json(role);
    } catch (error) {
      throw new error();
    }
  };
  getAll = async (req = request, res = response) => {
    try {
      const roles = await RoleModel.findAll();
      let total = roles.length;
      return res.status(200).json({ total, roles });
    } catch (error) {
      throw new error();
    }
  };
  getOne = async (req = request, res = response) => {
    const { id } = req.params;
    try {
      const role = await RoleModel.findByPk(Number(id));
      return res.status(200).json(role);
    } catch (error) {
      throw new error();
    }
  };

  update = async (req = request, res = response) => {
    const { id } = req.params;
    try {
      const role = await RoleModel.update(
        {
          ...req.body,
        },
        {
          where: {
            id,
          },
        }
      );
      return res.status(20).json(role);
    } catch (error) {
      throw new error();
    }
  };
  reactivate = async (req = request, res = response) => {
    const { id } = req.params;
    try {
      const role = await RoleModel.update(
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
      return res.status(200).json(role);
    } catch (error) {
      throw new error();
    }
  };
  delete = async (req = request, res = response) => {
    const { id } = req.params;
    try {
      const role = await RoleModel.update(
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
      return res.status(200).json(role);
    } catch (error) {
      throw new error();
    }
  };
}
module.exports = {
  RoleController,
};
