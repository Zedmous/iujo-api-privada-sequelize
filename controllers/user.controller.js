const { response } = require('express');
const bcryptjs = require('bcryptjs');
//const User = require('../models/usuario.model')
const { UserModel } = require('../utils/sequelize.utils')
const { generarJWT } = require('../helpers/generar-jwt');

const loginUser = async (req, res = response) => {
  const {email, password} = req.body;
  try {
    //verificar si el email existe
    const usuario = await UserModel.findOne({ where: { email } })
    if(!usuario){
      res.status(400).json({
        msj:"Usuario o contraseña son incorrectos, email no existe"
      })
    }else{
      const passwordValid= bcryptjs.compareSync(password,usuario.password)
      if(!passwordValid){
        res.status(400).json({
          msj:"Usuario o contraseña son incorrectos- contraseña incorrecta"
        })
      }else{
        //generar token 
        const token = await generarJWT(usuario.id);
        res.status(201).json({
          usuario,
          token
        })
      }
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msj:"Hable con el administrador"
    })
  }
}

const usuariosGet = async (req, res = response) => {
  try {
    const usuarios = await UserModel.findAll();
    response.status(200).json(
      usuarios
    )
  } catch (error) {
    console.log(error);
    response.status(400).send(error);
  }
}

const allUser = async (req, res = response) => {
  try {
    const usuarios = await UserModel.findAll();
    let total=usuarios.length;
    
    res.status(200).json({total,usuarios});
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
const createUser = async (req, res = response) => {
  try {
    const { name, email } = req.body;
    let { password } = req.body;
    const salt = bcryptjs.genSaltSync();
    password = bcryptjs.hashSync(password, salt)
    const user = await UserModel.create({ name, email, password });
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
const updateUser = async (req, res = response) => {
  try {
    const id = req.params.id;
    const usuario = await UserModel.findOne({ where: { id } });
    if (!usuario) {
      return res.status(400).json("User not found");
    }

    const { password, ...resto } = req.body;
    ///VALIDAR CONTRA BASE DE DATOS
    if (password) {
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt)
    }
    usuario.name = resto.name;
    usuario.email = resto.email;
    usuario.password = resto.password;
    await usuario.save();
    res.status(200).json({usuario});
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
const deleteUser = async (req, res = response) => {
  try {
    const id = req.params.id;
    const usuario = await UserModel.destroy({ where: { id } });
    if (!usuario) {
      return res.status(400).json("User not found");
    }
    res.status(200).json("User removed!!");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
const patchUser = (req, res = response) => {
  res.json({ ok: true, msj: 'patch api' })
}
module.exports = {
  loginUser,
  allUser,
  createUser,
  updateUser,
  deleteUser,
  patchUser
}