const { DataTypes } = require("sequelize");

const ExpenseModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  amount: {
    type: DataTypes.NUMBER,
  },
  company_id: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.BOOLEAN,
    default: true,
  }
};

module.exports = ExpenseModel;
