const Sequelize = require("sequelize");
const UserModel = require("../models/user.model");
const RoleModel = require("../models/role.model");


const url =
  process.env.NODE_ENV === "test"
    ? process.env.DATABASE_URL_TEST
    : process.env.DATABASE_URL;
const db = new Sequelize("ecomoda", "root", null, {
  dialect: "mysql",
  host: 'localhost',
});

//Tables in DB
const Role = db.define("roles", RoleModel, {
  db,
  modelName: "roles",
  timestamps: true,
});
const User = db.define("users", UserModel, {
  db,
  modelName: "users",
  timestamps: true,
});


//relations
Role.hasMany(User, {foreignKey: 'role_id'}); // Un usuario tiene muchos posts
User.belongsTo(Role, {foreignKey: 'role_id'}); // Un post pertenece a un usuario


const syncModels = async () => {
  await db.sync({ alter: true })
  try {
    //await User.sync({ alter: true });
    //await Role.sync({ alter: true })
  } catch (error) {
    console.log(error);
  }
};

syncModels();

module.exports = {
  UserModel: User,
  RoleModel: Role,
  db,
};
