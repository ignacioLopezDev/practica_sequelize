CONECTARSE A SEQUELIZE

npm i sequelize 
npm i pg
npm i pg-hstore

crear la base de datos desde la terminal

crear carpeta db>index.js

const S = require('sequelize')
const sequelize = new Sequelize ('nombredelaDB', usuario (null), contraseña postgres (null), {
	dialect:'postgres',
	host:'localhost',
	logging:'true/false'} // -> lo loguea en terminal
)

module.exports = sequelize;


CREAR MODELOS DE SEQUELIZE:

crear carpeta models>  
    index.js
    Cada_modelo.js //--> en mayuscula porque van a ser clases constructotas




Cada_modelo:

const S = require('sequelize')
const db = require('../db') 

class Nombre_modelo extends S.Model{} --< para que tome las propiedades de sequelize

Nombre_modelo.init({estructura},{conexion}) --> creacion de tabla


{estructura}:{
    atributo1:{
        type: S.STRING
    }
    atributo2:{
        age: S.INTEGER
    }
}

{conexion}: {sequelize: db, modelName: Nombre_modelo}


index:
Sirve para traer los Modelos y hacer los INNER JOIN entre Modelos


Por ultimo...
en nuestro Server.js sincronizarse a la base de datos antes de conectarse al puerto

const db = require ('./db')

db.sync({force:true}).then(()=>{
    app.listen(3000, () => console.log('escuchando puerto')
})

