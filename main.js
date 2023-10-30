document.addEventListener('DOMContentLoaded', function () {
    // Función para cambiar el color del botón principal al pasar el cursor sobre él
    const btnPrimary = document.querySelector('.btn-primary');
    btnPrimary.addEventListener('mouseover', function () {
        btnPrimary.style.backgroundColor = '#005656'; // Color más oscuro al pasar el cursor
    });
    btnPrimary.addEventListener('mouseout', function () {
        btnPrimary.style.backgroundColor = '#009688'; // Restaura el color original
    });

    // Función para mostrar y ocultar los testimonios de usuarios
    const testimonios = document.querySelectorAll('.testimonio');
    let testimonioActual = 0;

    function mostrarSiguienteTestimonio() {
        testimonios[testimonioActual].style.display = 'none';
        testimonioActual = (testimonioActual + 1) % testimonios.length;
        testimonios[testimonioActual].style.display = 'block';
    }

    setInterval(mostrarSiguienteTestimonio, 5000); // Cambia automáticamente cada 5 segundos

    // Función para ocultar la evaluación de salud mental al hacer clic en "Comenzar Evaluación"
    const btnEvaluacion = document.querySelector('.btn-secondary');
    btnEvaluacion.addEventListener('click', function () {
        const medicionSalud = document.querySelector('.medicion-salud');
        medicionSalud.style.display = 'none';
    });
});


const inicio = document.getElementById("inicio");

// Agrega una clase de animación al elemento de inicio al cargar la página
inicio.classList.add("animate__animated", "animate__fadeIn");



// Obtener elementos del DOM
const perfilButton = document.querySelector('#perfil-button');
const recursosButton = document.querySelector('#recursos-button');
const comunidadButton = document.querySelector('#comunidad-button');
const mainContent = document.querySelector('#main-content');

// Manejar eventos de clic en los botones
perfilButton.addEventListener('click', () => {
    // Cambiar el contenido en el área principal para mostrar el perfil
    mainContent.innerHTML = 'Contenido de Mi Perfil';
});

recursosButton.addEventListener('click', () => {
    // Cambiar el contenido en el área principal para mostrar los recursos
    mainContent.innerHTML = 'Contenido de Recursos';
});

comunidadButton.addEventListener('click', () => {
    // Cambiar el contenido en el área principal para mostrar la comunidad
    mainContent.innerHTML = 'Contenido de Comunidad';
});



// Obtener elementos del formulario
const tituloInput = document.querySelector('#titulo');
const autorInput = document.querySelector('#autor');
const contenidoTextarea = document.querySelector('#contenido');
const publicarButton = document.querySelector('#publicar-button');

// Manejar el evento de envío del formulario
publicarButton.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar que se envíe el formulario

    const titulo = tituloInput.value;
    const autor = autorInput.value;
    const contenido = contenidoTextarea.value;

    // Crear una nueva publicación en el DOM
    const nuevaPublicacion = document.createElement('div');
    nuevaPublicacion.innerHTML = `<h2>${titulo}</h2><p>Autor: ${autor}</p><p>${contenido}</p>`;

    // Agregar la nueva publicación al contenedor de publicaciones
    const publicacionesContainer = document.querySelector('#publicaciones-container');
    publicacionesContainer.appendChild(nuevaPublicacion);
});



document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const message = document.getElementById('message');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (username && email && password) {
            // Aquí puedes agregar lógica para enviar los datos a un servidor o hacer lo que necesites con ellos.
            message.textContent = 'Registro exitoso.';
        } else {
            message.textContent = 'Por favor, complete todos los campos.';
        }
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const btnIngresarDatos = document.getElementById('btn-ingresar-datos');
    const graficoProgreso = document.getElementById('grafico-progreso');

    btnIngresarDatos.addEventListener('click', function () {
        const fecha = document.getElementById('fecha').value;
        const puntaje = document.getElementById('puntaje').value;

        if (puntaje >= 0 && puntaje <= 10) {
            const barraProgreso = document.createElement('div');
            barraProgreso.classList.add('barra-progreso');
            barraProgreso.style.width = (puntaje * 10) + '%';
            barraProgreso.textContent = puntaje;

            const entradaProgreso = document.createElement('div');
            entradaProgreso.classList.add('entrada-progreso');
            entradaProgreso.textContent = fecha;

            graficoProgreso.appendChild(entradaProgreso);
            graficoProgreso.appendChild(barraProgreso);

            // Limpiar los campos
            document.getElementById('fecha').value = '';
            document.getElementById('puntaje').value = '';
        }
    });
});


