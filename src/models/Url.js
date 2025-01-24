const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Conexión a la base de datos

const Url = sequelize.define('Url', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: true, // Valida que sea una URL válida
    },
  },
  shortened_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'url', // Nombre exacto de la tabla en la base de datos
  timestamps: false, // Desactiva columnas createdAt y updatedAt
});

module.exports = Url;
