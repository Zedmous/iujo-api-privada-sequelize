const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class ExpenseModel extends Model {}

ExpenseModel.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.NUMBER,
    },
    company_id:{
      type:DataTypes.NUMBER
    },
    status: {
      type: DataTypes.BOOLEAN,
      default:true
    }
  },
  {
    sequelize,
    modelName: "expenses",
    timestamps: false
  }
);

module.exports = ExpenseModel
