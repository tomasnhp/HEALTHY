const { Pool } = require('pg');

// Conecta a la base de datos PostgreSQL
const pool = new Pool({
  user: 'tu_usuario', // Reemplaza con tu nombre de usuario
  host: 'localhost', // Cambia si tu servidor PostgreSQL no se encuentra en localhost
  database: 'healthy', // Reemplaza con el nombre de tu base de datos
  password: 'superusuario', // Reemplaza con tu contraseña
  port: 5432, // El puerto por defecto de PostgreSQL
});

// Función para registrar un nuevo usuario
function registrarUsuario(username, email, password, callback) {
  pool.query(
    'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id',
    [username, email, password],
    (error, result) => {
      if (error) {
        callback(error);
      } else {
        const userId = result.rows[0].id;
        callback(null, userId);
      }
    }
  );
}

module.exports = {
  registrarUsuario,
};
