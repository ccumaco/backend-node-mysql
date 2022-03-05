const { Sequelize } = require("sequelize")

module.exports = (sequelize, type) => {
    return sequelize.define('usuarios', {
        idusuario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        apellido: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        telefono: {
            type: Sequelize.STRING,
            allowNull: false
        },
        direccion: {
            type: Sequelize.STRING,
            allowNull: false
        },
        imagen: {
            type: Sequelize.STRING,
            allowNull: false
        },
        active: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        rol: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
}