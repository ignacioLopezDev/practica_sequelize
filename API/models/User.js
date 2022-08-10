const S = require("sequelize");
const db = require("../db");

class User extends S.Model {}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      validate: {
        isEmail: true,
      },
    },
    age: {
      type: S.INTEGER,
      allowNull: false,
    },

    // campo virtual con funcion para capturar el dominio
    getDomainEmail: {
      type: S.VIRTUAL,
      get() {
        return this.email.substring(this.email.lastIndexOf("@") + 1);
      },
    },
  },
  { sequelize: db, modelName: "user" }
);

// Creacion de Hooks --> funcionalidad previa a una instancia, ej previa a la creacion del modelo:

User.addHook("beforeCreate"),
  (user) => {
    console.log("estoy creando el usuario" + user.name);
  };

// Metodos de Clase --> Metodo creado por nosotros, van a poder ejecurtarse a todo el modelo

User.getHotmailUsers = () => {
  this.findAll({ where: { getDomainEmail: "hotmail.com" } });
};

// Metodos de Instancia --> se aplican al prototype del modelo

User.prototype.saludar = () => {
  return "My name is" + this.name;
}

module.exports = User;
