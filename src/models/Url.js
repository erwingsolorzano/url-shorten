const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Importa tu conexión de Sequelize

const Url = sequelize.define('Url', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false, // No permite valores nulos
    validate: {
      isUrl: true, // Valida que sea una URL válida
    },
  },
  shortened_url: {
    type: DataTypes.STRING,
    allowNull: false, // No permite valores nulos
  },
}, {
  tableName: 'url', // Especifica el nombre exacto de la tabla en la base de datos
  timestamps: false, // No agrega columnas `createdAt` y `updatedAt`
});

module.exports = Url;