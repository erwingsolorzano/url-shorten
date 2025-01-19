const { Sequelize } = require('sequelize');

// Configuración de Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,       // Nombre de la base de datos
  process.env.DB_USER,       // Usuario
  process.env.DB_PASSWORD,   // Contraseña
  {
    host: process.env.DB_HOST,  // Servidor
    dialect: 'mysql',           // Dialecto (MySQL en este caso)
    port: process.env.DB_PORT || 3306, // Puerto (opcional)
    logging: false,             // Desactiva el registro de las consultas (opcional)
  }
);

// Probar la conexión
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})();

module.exports = sequelize;