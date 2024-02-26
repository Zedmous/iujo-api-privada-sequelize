const { response, request } = require("express");
const bcryptjs = require('bcryptjs');
const { UserModel } = require("../config/sequelize.config");

class UserController {

  constructor(){}
  
  create = async (req = request, res = response) => {
    try {
      const salt = bcryptjs.genSaltSync();
      password = bcryptjs.hashSync(password, salt);
      const user = await UserModel.create({
        ...req.body,
        password
      });
      return res.status(201).json(user);
    } catch (error) {
      throw new error();
    }
  };
  getAll = async (req = request, res = response) => {
    try {
      const users = await UserModel.findAll();
      let total = users.length;
      return res.status(200).json({ total, users });
    } catch (error) {
      throw new error();
    }
  };
  getOne = async (req = request, res = response) => {
    const { id } = req.params;
    try {
      const user = await UserModel.findByPk(Number(id));
      return res.status(200).json(user);
    } catch (error) {
      throw new error();
    }
  };

  update = async (req = request, res = response) => {
    const { id } = req.params;
    try {
      const { password, ...body } = req.body;
      if (password) {
        const salt = bcryptjs.genSaltSync();
        body.password = bcryptjs.hashSync(password, salt);
      }
      const user = await UserModel.update(
        {
          ...body,
        },
        {
          where: {
            id,
          },
        }
      );
      return res.status(20).json(user);
    } catch (error) {
      throw new error();
    }
  };
  reactivate = async (req = request, res = response) => {
    const { id } = req.params;
    try {
      const user = await UserModel.update(
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
      return res.status(200).json(user);
    } catch (error) {
      throw new error();
    }
  };
  delete = async (req = request, res = response) => {
    const { id } = req.params;
    try {
      const user = await UserModel.update(
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
      return res.status(200).json(user);
    } catch (error) {
      throw new error();
    }
  };
}

module.exports = {
  UserController,
};
