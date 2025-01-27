const express = require('express');
const Url = require('../models/Url'); // Importa el modelo Sequelize
const router = express.Router();

// Ruta para obtener todas las URLs
router.get('/', async (req, res) => {
  try {
    const urls = await Url.findAll(); // Recupera las URLs desde la base de datos
    res.json(urls); // Responde con el array de URLs
  } catch (error) {
    console.error('Error getting URLs:', error);
    res.status(500).json({ error: 'Error getting URLs' });
  }
});

// Ruta para guardar una URL
router.post('/', async (req, res) => {
  try {
    const { url, shortened_url } = req.body; // Extrae la URL del cuerpo de la petición
    const result = await Url.create({ url, shortened_url }); // Recupera las URLs desde la base de datos
    res.json(result);
  } catch (error) {
    console.error('Error creating URL:', error);
    res.status(500).json({ error: 'Error getting URLs' });
  }
});

module.exports = router;