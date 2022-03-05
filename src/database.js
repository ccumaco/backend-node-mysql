const Sequelize = require('sequelize')
const CategoriasModel = require('./models/Categorias')
const ComercioModel = require('./models/Comercios')
const sequelize = new Sequelize('comercios', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

const Categorias = CategoriasModel(sequelize, Sequelize)
const Comercios = ComercioModel(sequelize, Sequelize)

sequelize.sync({ force: false })
    .then(() => {
        console.log('Categorias table created')
    })
    .catch(err => console.log(err))

module.exports = {
    Categorias,
    Comercios
}