const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class PatternModel extends Model {}

PatternModel.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    width: {
      type: DataTypes.NUMBER,
    },
    height: {
      type: DataTypes.NUMBER,
    },
    size: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING,
    },
    garmenT_id: {
      type: DataTypes.NUMBER,
    },
    status: {
      type: DataTypes.BOOLEAN,
      default:true
    }
  },
  {
    sequelize,
    modelName: "pattern",
    timestamps: false
  }
);

module.exports = PatternModel
