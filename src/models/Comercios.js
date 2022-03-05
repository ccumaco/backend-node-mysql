const { Sequelize } = require("sequelize")

module.exports = (sequelize, type) => {
    return sequelize.define('comercios', {
        idcomercio: {
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
        calificacion: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        imagen: {
            type: Sequelize.STRING,
            allowNull: false
        }

    })
}