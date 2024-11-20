const https = require('https');

// Realizar una solicitud GET a una API pública
const url = 'https://jsonplaceholder.typicode.com/posts/1';

https.get(url, (res) => {
  let data = '';

  // Almacenar los datos recibidos en partes
  res.on('data', (chunk) => {
    data += chunk;
  });

  // Cuando la solicitud termina, procesar los datos
  res.on('end', () => {
    console.log('Respuesta recibida:', JSON.parse(data));
  });
}).on('error', (err) => {
  console.error('Error en la solicitud:', err.message);
});
