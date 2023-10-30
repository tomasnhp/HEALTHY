const express = require('express');
const app = express();
const port = 3000;
const registro = require('./registro_bbdd'); // Importa el módulo para la base de datos

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/registro', (req, res) => {
  const { email, password } = req.body;

  registro.registrarUsuario(email, password, (error, userId) => {
    if (error) {
      console.error('Error de registro:', error);
      res.status(500).json({ success: false, message: error });
    } else {
      res.status(201).json({ success: true, message: 'Registro exitoso', userId });
    }
  });
});

app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
