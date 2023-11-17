const { DataTypes, DATE } = require("sequelize");

const UserModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
  },
  email: {
    type: DataTypes.STRING(50),
  },
  password: {
    type: DataTypes.STRING(50),
  },
  role_id: {
    type: DataTypes.NUMBER,
  },
  deletedAt:{
    type:DataTypes.DATE
  },
  deleted:{
    type:DataTypes.BOOLEAN
  }
};

module.exports = UserModel;
