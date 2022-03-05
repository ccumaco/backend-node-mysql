const { Sequelize } = require("sequelize")

module.exports = (sequelize, type) => {
    return sequelize.define('categorias', {
        idcategorias: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        descripcion: {
            type: Sequelize.STRING,
            allowNull: false
        },
        active: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        promocion: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        imagen: {
            type: Sequelize.STRING,
            defaultValue: 'https://media.istockphoto.com/photos/closeup-on-an-automated-security-system-at-a-house-picture-id1325947414?b=1&k=20&m=1325947414&s=170667a&w=0&h=RXFQ-YYykVjMtzDu6vAzDvnXDS54YuKr0J24OO1PArU=',
            allowNull: false
        }

    })
}