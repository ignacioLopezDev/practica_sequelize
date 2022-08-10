const S = require('sequelize');
const sequelize = new S ('proyect_sequelize', 'postgres', '34179205', {
    dialect: 'postgres',
    host:'localhost',
    logging:false
})


module.exports = sequelize;