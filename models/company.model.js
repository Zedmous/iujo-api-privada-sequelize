const { DataTypes } = require("sequelize");

const CompanyModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  direction: {
    type: DataTypes.STRING(100),
  },
  telephone: {
    type: DataTypes.STRING(20),
  },
  email: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true, // esto hace que el campo sea único
    validate: {
      isEmail: true, // esto valida que el valor sea un email válido
      notEmpty: true, // esto valida que el valor no esté vacío
    },
  },
  cost_salary: {
    type: DataTypes.NUMBER,
    allowNull: false,
    unique: true,
  },
  img: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.BOOLEAN,
    default: true,
  },
  deletedAt:{
    type:DataTypes.DATE
  }
};

module.exports = CompanyModel;
