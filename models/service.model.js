const { DataTypes } = require("sequelize");

const ServiceModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50)
  },
  retail_price: {
    type: DataTypes.NUMBER
  },
  wholesale_price: {
    type: DataTypes.NUMBER
  },
  tservice_id:{
    type:DataTypes.INTEGER
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.BOOLEAN,
    default: true,
  },
};

module.exports = ServiceModel;
