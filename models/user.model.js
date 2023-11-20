const { DataTypes } = require("sequelize");

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
    allowNull: false,
    unique: true, // esto hace que el campo sea único
    validate: {
      isEmail: true, // esto valida que el valor sea un email válido
      notEmpty: true, // esto valida que el valor no esté vacío
    },
  },
  password: {
    type: DataTypes.STRING(50),
  },
  role_id: {
    type: DataTypes.INTEGER,
  },
  deletedAt:{
    type:DataTypes.DATE
  },
  status:{
    type: DataTypes.BOOLEAN,
    default: true,
  }
};

module.exports = UserModel;
