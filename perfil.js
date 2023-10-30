// Supongamos que los datos del usuario se almacenan en un objeto 'usuario' después de iniciar sesión.
const usuario = {
    nombre: 'Juan Pérez',
    edad: '30 años',
    email: 'juan@email.com',
    genero: 'Masculino'
};

// Cuando se carga la página, llenamos los elementos con los datos del usuario.
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('nombre').textContent = `Nombre: ${usuario.nombre}`;
    document.getElementById('edad').textContent = `Edad: ${usuario.edad}`;
    document.getElementById('email').textContent = `Correo Electrónico: ${usuario.email}`;
    document.getElementById('genero').textContent = `Género: ${usuario.genero}`;
});
