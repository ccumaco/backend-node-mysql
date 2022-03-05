const Sequelize = require('sequelize')
const CategoriasModel = require('./models/Categorias')
const sequelize = new Sequelize('comercios', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

const Categorias = CategoriasModel(sequelize, Sequelize)

sequelize.sync({ force: false })
    .then(() => {
        console.log('Categorias table created')
    })
    .catch(err => console.log(err))

module.exports = {
    Categorias
}