const jwt= require('jsonwebtoken')

const generarJWT=(id='')=>{
    return new Promise((resolve,reject)=>{//esto es para retornar una promesa
        const payload={id}
        jwt.sign(payload,process.env.SECRET_KEY,{
            expiresIn:'1h'
        },(error,token)=>{
            if(error){
                console.log(error)
                reject('No se pudo generar el token')
            } else{
                resolve(token)//enviamos el token
            }
        })
    });
}
module.exports={
    generarJWT
}