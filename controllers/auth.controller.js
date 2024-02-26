const { response } = require('express');
const bcryptjs = require('bcryptjs');
const { UserModel } = require('../config/sequelize.config')
const { generarJWT } = require('../helpers/generar-jwt');


class AuthController{
  constructor(){

  }
  login = async (req, res = response) => {
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
};
module.exports = {
  AuthController
}