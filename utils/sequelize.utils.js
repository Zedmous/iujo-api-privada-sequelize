const Sequelize = require("sequelize");
const UserModel = require("../models/user.model");
const CompanyModel = require("../models/company.model");

const url =
  process.env.NODE_ENV === "test"
    ? process.env.DATABASE_URL_TEST
    : process.env.DATABASE_URL;
const db = new Sequelize("stylesDB", "ejnsilva", "8565203", {
  dialect: "sqlite",
  host: url,
});

//Tables in DB
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
  db,
};
