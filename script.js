document.addEventListener("DOMContentLoaded", function () {
    const saludForm = document.getElementById("salud-form");
    const graficoProgreso = document.getElementById("grafico-progreso");
    const datosProgreso = [];
  
    // Escucha el envío del formulario
    saludForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const fecha = saludForm.fecha.value;
      const puntaje = parseInt(saludForm.puntaje.value);
  
      // Validar el puntaje
      if (puntaje >= 0 && puntaje <= 10) {
        // Agregar los datos a la lista
        datosProgreso.push({ fecha, puntaje });
  
        // Actualizar la visualización del progreso
        mostrarProgreso();
      } else {
        alert("El puntaje debe estar entre 0 y 10.");
      }
  
      // Limpiar el formulario
      saludForm.reset();
    });
  
    // Función para mostrar el progreso en un gráfico simple
    function mostrarProgreso() {
      graficoProgreso.innerHTML = ""; // Limpiar el contenido anterior
  
      datosProgreso.forEach((dato) => {
        const barra = document.createElement("div");
        barra.classList.add("barra-progreso");
        barra.style.width = dato.puntaje * 10 + "%";
        barra.textContent = dato.puntaje.toString();
        graficoProgreso.appendChild(barra);
      });
    }
  });

  
  function mostrarFraseMotivacional() {
    const estadoEmocionalSelect = document.getElementById("estado-emocional");
    const fraseMotivacional = document.getElementById("frase-motivacional");

    const estadoSeleccionado = estadoEmocionalSelect.value;

    // Aquí puedes definir frases motivacionales según el estado emocional
    const frases = {
        triste: [
            "La tristeza es solo una nube pasajera en el cielo de tu vida.",
            "Aunque estés triste, siempre hay una razón para sonreír.",
            "No importa cuán triste te sientas, el mundo sigue girando.",
        ],
        estresado: [
            "El estrés es como mecerse en una silla mecedora: te mantiene ocupado, pero no te lleva a ninguna parte.",
            "Respira profundo y recuerda que el estrés no puede controlar tu vida.",
            "El estrés es el resultado de no vivir en el presente.",
        ],
        ansioso: [
            "La ansiedad es como una mecedora: te da mucho que hacer, pero no te lleva a ninguna parte.",
            "Recuerda que la ansiedad no es más que un estado temporal.",
            "La ansiedad es solo un recordatorio de que estás viviendo fuera de este momento.",
        ],
        // Puedes agregar más estados y frases aquí
    };

    if (frases[estadoSeleccionado]) {
        // Selecciona una frase aleatoria para el estado emocional
        const fraseAleatoria = frases[estadoSeleccionado][Math.floor(Math.random() * frases[estadoSeleccionado].length)];
        fraseMotivacional.textContent = fraseAleatoria;
    } else {
        fraseMotivacional.textContent = "No hay frases disponibles para este estado emocional.";
    }
}


// Función para animar elementos con GSAP
function animateElements() {
    gsap.from(".main-content", { opacity: 0, y: 50, duration: 1, ease: "power2.out" });
    gsap.from(".medicion-salud", { opacity: 0, x: -50, duration: 1, ease: "power2.out", delay: 0.5 });
    gsap.from(".apoyo-personalizado", { opacity: 0, x: 50, duration: 1, ease: "power2.out", delay: 0.5 });
    gsap.from(".seguimiento", { opacity: 0, x: -50, duration: 1, ease: "power2.out", delay: 1 });
    gsap.from(".conexion-social", { opacity: 0, x: 50, duration: 1, ease: "power2.out", delay: 1 });
    gsap.from(".educacion-conciencia", { opacity: 0, x: -50, duration: 1, ease: "power2.out", delay: 1.5 });
    gsap.from(".oportunidad-mejora", { opacity: 0, x: 50, duration: 1, ease: "power2.out", delay: 1.5 });
}

// Llama a la función para animar elementos al cargar la página
window.addEventListener("load", animateElements);






function mostrarFraseMotivacional() {
    // Simula la obtención de una frase motivacional basada en el estado emocional seleccionado
    const estadoEmocional = document.getElementById("estado-emocional").value;
    let fraseMotivacional = "Aquí aparecerá una frase motivacional relacionada con tu estado emocional.";

    if (estadoEmocional === "triste") {
        fraseMotivacional = "No importa cuán oscuro sea el día, siempre hay una luz de esperanza.";
    } else if (estadoEmocional === "estresado") {
        fraseMotivacional = "El descanso es esencial para superar el estrés. ¡Relájate!";
    } else if (estadoEmocional === "ansioso") {
        fraseMotivacional = "La ansiedad es solo una señal de que debes detenerte y tomar un respiro.";
    }

    document.getElementById("frase-motivacional").textContent = fraseMotivacional;
}











// Este es un ejemplo simplificado de cómo podrías mostrar el progreso en un gráfico.
// Debes reemplazarlo con tu propia lógica y bibliotecas gráficas si es necesario.

document.getElementById("salud-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const fecha = document.getElementById("fecha").value;
    const puntaje = parseFloat(document.getElementById("puntaje").value);

    if (!isNaN(puntaje) && puntaje >= 0 && puntaje <= 10) {
        const graficoProgreso = document.getElementById("grafico-progreso");

        const nuevaEntrada = document.createElement("div");
        nuevaEntrada.style.width = `${puntaje * 10}%`; // Simulación de progreso
        nuevaEntrada.style.backgroundColor = "#3E97FF";
        nuevaEntrada.style.height = "100%";
        nuevaEntrada.style.borderRadius = "5px";
        nuevaEntrada.style.marginBottom = "5px";

        graficoProgreso.appendChild(nuevaEntrada);
    }
});












document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (validateForm(username, email, password)) {
        // Envía los datos de registro al servidor o realiza alguna acción necesaria.
        alert("¡Registro exitoso!");
        // Aquí puedes redirigir al usuario a otra página si lo deseas.
    }
});

function validateForm(username, email, password) {
    // Realiza validaciones del formulario aquí.
    if (username === "" || email === "" || password === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    // Agrega más validaciones según tus requisitos.

    return true;
}











// Script para registrar actividades
document.addEventListener('DOMContentLoaded', function () {
    const btnRegistrar = document.getElementById('btn-registrar');
    const actividadesRegistradas = document.getElementById('actividades-registradas');
    const registroActividades = document.getElementById('registro-actividades');

    btnRegistrar.addEventListener('click', function () {
        const actividad = registroActividades.value;
        if (actividad) {
            const actividadElement = document.createElement('div');
            actividadElement.textContent = actividad;
            actividadesRegistradas.appendChild(actividadElement);
            registroActividades.value = '';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const saludForm = document.getElementById('salud-form');
    const graficoProgreso = document.getElementById('grafico-progreso');
    const datosProgreso = [];

    // Escucha el envío del formulario
    saludForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const fecha = saludForm.fecha.value;
        const puntaje = parseInt(saludForm.puntaje.value);

        if (validarPuntaje(puntaje)) {
            // Agregar los datos a la lista
            datosProgreso.push({ fecha, puntaje });

            // Actualizar la visualización del progreso
            mostrarProgreso(puntaje);
        } else {
            alert('El puntaje debe estar entre 0 y 10.');
        }

        // Limpiar el formulario
        saludForm.reset();
    });

    // Función para validar el puntaje
    function validarPuntaje(puntaje) {
        return !isNaN(puntaje) && puntaje >= 0 && puntaje <= 10;
    }

    // Función para mostrar el progreso en una barra animada
    function mostrarProgreso(puntaje) {
        const barraProgreso = document.createElement('div');
        barraProgreso.classList.add('barra-progreso');
        barraProgreso.style.width = '0%'; // Inicialmente sin ancho

        graficoProgreso.appendChild(barraProgreso);

        // Usar GSAP para animar la barra
        gsap.to(barraProgreso, {
            width: `${puntaje * 10}%`,
            duration: 1, // Duración de la animación en segundos
            ease: 'power2.out', // Tipo de animación
        });
    }
});







// Escuchar el botón "Registrar Actividad"
document.getElementById("btn-registrar").addEventListener("click", function () {
    const actividad = document.getElementById("registro-actividades").value;
    if (actividad.trim() !== "") {
        const actividadElement = document.createElement("div");
        actividadElement.textContent = actividad;
        document.getElementById("actividades-registradas").appendChild(actividadElement);
        document.getElementById("registro-actividades").value = "";
    }
});

// Puedes agregar más funciones o scripts según las necesidades de tu sección de perfil.


document.addEventListener("DOMContentLoaded", function () {
    const registroActividades = document.getElementById("registro-actividades");
    const btnRegistrar = document.getElementById("btn-registrar");
    const actividadesRegistradas = document.getElementById("actividades-registradas");

    btnRegistrar.addEventListener("click", function () {
        const actividad = registroActividades.value;

        if (actividad.trim() !== "") {
            // Crear un nuevo elemento de lista y agregar la actividad
            const nuevaActividad = document.createElement("li");
            nuevaActividad.textContent = actividad;

            // Agregar la nueva actividad a la lista de actividades registradas
            actividadesRegistradas.appendChild(nuevaActividad);

            // Limpiar el campo de registro
            registroActividades.value = "";
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Función para mostrar el chatbot
    function mostrarChatbot() {
        const botui = new BotUI('chat-container');

        // Inicio del chatbot
        botui.message.add({
            content: '¡Hola! Soy tu asistente de apoyo emocional. ¿En qué puedo ayudarte hoy?',
            delay: 1000,
        });

        // Aquí puedes agregar interacciones con el chatbot, como respuestas personalizadas a las selecciones del usuario.
        // Por ejemplo, puedes usar botui.action.text para recopilar respuestas del usuario y luego responder en consecuencia.

        // Ejemplo de recopilación de respuestas del usuario
        botui.action.text({
            action: {
                placeholder: 'Escribe tu respuesta...',
            },
        }).then(function (res) {
            // Respuesta del usuario
            const respuestaUsuario = res.value;

            // Puedes agregar lógica personalizada aquí para responder a la respuesta del usuario.

            // Por ejemplo, podrías tener una lista de frases motivacionales y seleccionar una al azar o en función del estado emocional del usuario.
            const frasesMotivacionales = {
                triste: ['Frase 1', 'Frase 2', 'Frase 3'],
                estresado: ['Frase 4', 'Frase 5', 'Frase 6'],
                ansioso: ['Frase 7', 'Frase 8', 'Frase 9'],
            };

            // Simulación de selección de frase motivacional basada en la respuesta del usuario
            const estadoEmocional = document.getElementById('estado-emocional').value;
            const frases = frasesMotivacionales[estadoEmocional];
            const fraseMotivacional = frases[Math.floor(Math.random() * frases.length)];

            // Respuesta del chatbot
            botui.message.add({
                content: `¡Entiendo! Te ofrezco esta frase motivacional: "${fraseMotivacional}"`,
                delay: 1000,
            });
        });
    }

    // Función para enviar mensajes del usuario al chatbot
    function enviarMensaje() {
        const userMessage = document.getElementById('user-message').value;
        if (userMessage) {
            const botui = new BotUI('chat-container');
            botui.message.human({ content: userMessage });
            document.getElementById('user-message').value = '';

            // Aquí puedes agregar lógica personalizada para responder a los mensajes del usuario.
            // Por ejemplo, puedes procesar la entrada del usuario y proporcionar respuestas adecuadas.
        }
    }

    // Agrega más lógica según tus necesidades en este script.
});
document.addEventListener("DOMContentLoaded", function () {
    // Función para mostrar el chatbot
    function mostrarChatbot() {
        const botui = new BotUI('chat-container');

        // Inicio del chatbot
        botui.message.add({
            content: '¡Hola! Soy tu asistente de apoyo emocional. ¿En qué puedo ayudarte hoy?',
            delay: 1000,
        });

        // Aquí puedes agregar interacciones con el chatbot, como respuestas personalizadas a las selecciones del usuario.
        // Por ejemplo, puedes usar botui.action.text para recopilar respuestas del usuario y luego responder en consecuencia.

        botui.action.text({
            action: {
                placeholder: 'Escribe tu respuesta...',
            },
        }).then(function (res) {
            // Respuesta del usuario
            const respuestaUsuario = res.value;

            // Respuesta personalizada según el estado emocional
            const estadoEmocional = document.getElementById('estado-emocional').value;
            let respuestaChatbot = '';

            switch (estadoEmocional) {
                case 'triste':
                    respuestaChatbot = 'Estoy aquí para ayudarte a superar este momento. Una sonrisa puede ser un buen comienzo.';
                    break;
                case 'estresado':
                    respuestaChatbot = 'El estrés es parte de la vida, pero también es importante cuidar de ti mismo. ¿Has intentado la meditación o el yoga?';
                    break;
                case 'ansioso':
                    respuestaChatbot = 'La ansiedad es común, pero existen técnicas para manejarla. ¿Has probado la respiración profunda o el ejercicio?';
                    break;
                default:
                    respuestaChatbot = 'No entiendo tu estado emocional, pero estoy aquí para ayudarte en general.';
                    break;
            }

            // Respuesta del chatbot
            botui.message.add({
                content: respuestaChatbot,
                delay: 1000,
            });
        });
    }

    // Función para enviar mensajes del usuario al chatbot
    function enviarMensaje() {
        const userMessage = document.getElementById('user-message').value;
        if (userMessage) {
            const botui = new BotUI('chat-container');
            botui.message.human({ content: userMessage });
            document.getElementById('user-message').value = '';

            // Aquí puedes agregar más lógica personalizada para responder a los mensajes del usuario.
        }
    }
});

// Script para el inicio de sesión de prueba
function iniciarSesion() {
    // Simulación de validación del formulario (reemplaza esto con la lógica real de validación)
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    
    // Comprueba si el usuario y la contraseña coinciden con el usuario de prueba
    if (emailInput.value === 'tomasnhperez@gmail.com' && passwordInput.value === 'hola') {
        // Redirige al usuario a la página principal después de iniciar sesión
        window.location.href = 'index_principal.html';
    } else {
        // Muestra un mensaje de error si el inicio de sesión falla
        alert('Datos de inicio de sesión incorrectos. Inténtalo de nuevo.');
    }
}

// Agregar el evento de clic al botón de inicio de sesión
const iniciarSesionButton = document.getElementById('iniciarSesionButton');
if (iniciarSesionButton) {
    iniciarSesionButton.addEventListener('click', iniciarSesion);
}
