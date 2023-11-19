const Sequelize = require("sequelize");
const UserModel = require("../models/user.model");
const CompanyModel = require("../models/company.model");
const RoleModel = require("../models/role.model");
const ExpenseModel = require("../models/expense.model");

const url =
  process.env.NODE_ENV === "test"
    ? process.env.DATABASE_URL_TEST
    : process.env.DATABASE_URL;
const db = new Sequelize("stylesDB", "ejnsilva", "8565203", {
  dialect: "sqlite",
  host: url,
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
const Company = db.define("companies", CompanyModel, {
  db,
  modelName: "companies",
  timestamps: true,
});
const Expense = db.define("expenses", ExpenseModel, {
  db,
  modelName: "expenses",
  timestamps: true,
});

//relations
Role.hasMany(User, {foreignKey: 'role_id'}); // Un usuario tiene muchos posts
User.belongsTo(Role, {foreignKey: 'role_id'}); // Un post pertenece a un usuario
Company.hasMany(Expense, {foreignKey: 'company_id'});
Expense.belongsTo(Company, {foreignKey: 'company_id'});

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
  CompanyModel: Company,
  RoleModel: Role,
  ExpenseModel: Expense,
  db,
};
