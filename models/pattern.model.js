const { DataTypes } = require("sequelize");

const PatternModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
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
  garment_id: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.BOOLEAN,
    default: true,
  },
};

module.exports = PatternModel;
