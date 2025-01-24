import React, { useState, useEffect } from 'react';
import api from './api'; // Archivo para conectar con el backend

const App = () => {
  const [urls, setUrls] = useState([]); // Estado para almacenar las URLs
  const [newUrl, setNewUrl] = useState(''); // Estado para la nueva URL

  // Cargar las URLs al iniciar
  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await api.get('/urls');
        setUrls(response.data); // Guardar las URLs en el estado
      } catch (error) {
        console.error('Error al cargar las URLs:', error);
      }
    };

    fetchUrls();
  }, []);

  // Función para agregar una nueva URL
  const addUrl = async () => {
    try {
      const shortenedUrl = `https://short.ly/${Math.random().toString(36).substring(7)}`;
      const response = await api.post('/urls', {
        url: newUrl,
        shortened_url: shortenedUrl,
      });
      setUrls([...urls, response.data]);
      setNewUrl('');
    } catch (error) {
      console.error('Error al agregar la URL:', error);
    }
  };

  return (
    <div>
      <h1>Acortador de URLs</h1>

      {/* Formulario para agregar nuevas URLs */}
      <div>
        <input
          type="text"
          placeholder="Ingresa una URL"
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
        />
        <button onClick={addUrl}>Acortar</button>
      </div>

      {/* Lista de URLs */}
      <ul>
      {Array.isArray(urls) && urls.map((url) => (
          <li key={url.id}>
            Original: {url.url} - Acortada: <a href={url.shortened_url} target="_blank" rel="noopener noreferrer">{url.shortened_url}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
