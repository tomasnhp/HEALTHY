const preguntasFrecuentes = {
    "salud mental": {
        respuesta: "La salud mental se refiere a tu bienestar emocional y psicológico. Incluye la capacidad de manejar el estrés, mantener relaciones saludables y tomar decisiones informadas para llevar una vida plena. En general, mantener una buena salud mental implica cuidar de tu bienestar emocional y psicológico. Algunas técnicas que pueden ayudar incluyen:\n1. Practicar la autocompasión.\n2. Establecer metas realistas.\n3. Mantener relaciones saludables.\n4. Hacer ejercicio regularmente.\n5. Buscar apoyo de amigos y familiares.",
        tecnicas: "En general, mantener una buena salud mental implica cuidar de tu bienestar emocional y psicológico. Algunas técnicas que pueden ayudar incluyen:\n1. Practicar la autocompasión.\n2. Establecer metas realistas.\n3. Mantener relaciones saludables.\n4. Hacer ejercicio regularmente.\n5. Buscar apoyo de amigos y familiares.",
    },
    "estrés": {
        respuesta: "El estrés es una respuesta del cuerpo a situaciones difíciles. A corto plazo, puede ser útil para enfrentar desafíos, pero el estrés crónico puede afectar negativamente la salud mental y física. ¿Deseas aprender técnicas para manejar el estrés?",
        tecnicas: "Aquí tienes algunas técnicas para manejar el estrés:\n1. Práctica la respiración profunda.\n2. Haz ejercicio regularmente.\n3. Establece límites y prioridades.\n4. Habla con amigos o un terapeuta.\n5. Realiza actividades relajantes, como la meditación.",
    },
    "depresión": {
        respuesta: "La depresión es un trastorno del estado de ánimo que se caracteriza por una profunda tristeza y la pérdida de interés en actividades placenteras. Se diagnostica a través de una evaluación realizada por un profesional de la salud mental. ¿Te gustaría conocer más sobre los síntomas de la depresión?",
        tecnicas: "El tratamiento de la depresión a menudo implica terapia y, en algunos casos, medicamentos. No obstante, algunas técnicas que pueden ayudar a manejar la depresión incluyen:\n1. Hablar con un terapeuta.\n2. Mantener una rutina diaria.\n3. Participar en actividades que solías disfrutar.\n4. Buscar apoyo emocional de amigos y familiares.\n5. Practicar la autocompasión.",
    },
    "ansiedad": {
        respuesta: "La ansiedad es una reacción natural a situaciones de estrés, pero en exceso puede convertirse en un trastorno. ¿Deseas aprender estrategias para controlar la ansiedad?",
        tecnicas: "Aquí tienes algunas técnicas para controlar la ansiedad:\n1. Practica la meditación y la atención plena.\n2. Realiza ejercicio regularmente.\n3. Identifica y reemplaza pensamientos negativos.\n4. Habla con un terapeuta para obtener apoyo adicional.\n5. Evita la cafeína y otros estimulantes si tienden a aumentar tu ansiedad.",
    },
    "autoestima": {
        respuesta: "La autoestima se refiere a cómo te valoras a ti mismo. Es importante para la salud mental. ¿Te gustaría saber cómo mejorar tu autoestima?",
        tecnicas: "Aquí tienes algunas técnicas para mejorar tu autoestima:\n1. Practica el autocuidado y el amor propio.\n2. Establece metas realistas y celébralas.\n3. Rodéate de personas que te apoyen y te valoren.\n4. Trabaja en desafiar pensamientos negativos sobre ti mismo.\n5. Aprende a decir no a las demandas que son perjudiciales para tu autoestima.",
    },
};

const repreguntas = {
    "estrés": [
        "¿Experimentas estrés en tu vida? ¿En qué puedo ayudarte con respecto al estrés?",
        "¿Qué situaciones específicas te generan estrés?",
        "Aprender a manejar el estrés puede mejorar tu bienestar. ¿Te gustaría conocer algunas técnicas para manejarlo? (Responde 'si' o 'no)"
    ],
    "depresión": [
        "La depresión es un tema importante. ¿Puedo proporcionarte información sobre los síntomas o cómo buscar ayuda?",
        "¿Has experimentado síntomas de depresión recientemente?",
        "Si estás interesado en conocer más sobre cómo la terapia puede ayudar en casos de depresión, puedo explicártelo."
    ],
    "ansiedad": [
        "La ansiedad es común. ¿Quieres aprender a controlarla?",
        "¿Puedes identificar las situaciones que te causan ansiedad?",
        "Controlar la ansiedad es posible con estrategias adecuadas. ¿Te gustaría conocer algunas de ellas? (Responde 'si' o 'no)"
    ],
    "autoestima": [
        "La autoestima es importante para la salud mental. ¿Te gustaría aprender a mejorar tu autoestima?",
        "¿Qué aspectos específicos de tu autoestima te gustaría trabajar?",
        "Mejorar la autoestima puede llevar tiempo, pero es un proceso valioso. ¿Estás dispuesto a aprender estrategias para fortalecer tu autoestima? (Responde 'si' o 'no)"
    ],
};

let conversacion = [];
let respuestaAnterior = "";

function obtenerRespuesta(userMessage) {
    const mensaje = normalizarTexto(userMessage);

    for (const palabra in preguntasFrecuentes) {
        if (mensaje.includes(normalizarTexto(palabra))) {
            conversacion = [];
            conversacion.push(palabra);
            return preguntasFrecuentes[palabra].respuesta;
        }
    }

    if (conversacion.length > 0) {
        const preguntaActual = conversacion[conversacion.length - 1];
        if (preguntaActual in repreguntas) {
            if (mensaje.toLowerCase().includes("gracias") || mensaje.toLowerCase() === "chau") {
                conversacion = [];
                return "¡De nada! Siempre estoy aquí para ayudarte. ¡Cuídate y ten un gran día!";
            } else if (mensaje.toLowerCase() === "si") {
                conversacion = [];
                return preguntasFrecuentes[preguntaActual].tecnicas || "Lo siento, aún no tengo información detallada sobre este tema. ¿Te gustaría preguntar sobre otra área de la salud mental?";
            }
            conversacion.push(mensaje);
            const repregunta = repreguntas[preguntaActual];
            return repregunta[1];
        } else {
            conversacion = [];
            return "No estoy seguro de cómo responder a eso. ¿Puedes hacer una pregunta más específica sobre la salud mental?";
        }
    } else {
        if (mensaje.includes("hola")) {
            return "¡Hola! ¿En qué puedo ayudarte?";
        }
        return "No estoy seguro de cómo responder a eso. ¿Puedes hacer una pregunta más específica sobre la salud mental?";
    }
}

function normalizarTexto(texto) {
    return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\?/g, "");
}

// Resto del código para mostrar respuestas, manejar eventos, etc.

function mostrarRespuesta(respuesta) {
    reproducirSonido();
    respuestaAnterior = respuesta;
    const chatboxBody = document.getElementById("chatbox-body");
    const chatbotMessageElement = document.createElement("div");
    chatbotMessageElement.className = "message chatbot-message";
    chatbotMessageElement.textContent = respuesta;
    chatboxBody.appendChild(chatbotMessageElement);

    scrollChatboxToBottom();
}

function scrollChatboxToBottom() {
    const chatboxBody = document.getElementById("chatbox-body");
    chatboxBody.scrollTop = chatboxBody.scrollHeight;
}

function toggleChatbox() {
    const chatboxContainer = document.getElementById("chatbox-container");
    chatboxContainer.classList.toggle("closed");
}

function enviarMensaje(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const userMessage = document.getElementById("user-input").value;
        const chatboxBody = document.getElementById("chatbox-body");
        const userMessageElement = document.createElement("div");
        userMessageElement.className = "message user-message";
        userMessageElement.textContent = userMessage;
        chatboxBody.appendChild(userMessageElement);

        const respuesta = obtenerRespuesta(userMessage);
        mostrarRespuesta(respuesta);

        document.getElementById("user-input").value = "";

        scrollChatboxToBottom();
    }
}

function reproducirSonido() {
    const audio = new Audio('short-success-sound-glockenspiel-treasure-video-game-6346.mp3');
    audio.play();
}
function toggleChatbox() {
    const chatboxContainer = document.getElementById("chatbox-container");
    const chatboxToggle = document.getElementById("chatbox-toggle");
    const chatboxBody = document.getElementById("chatbox-body");

    if (chatboxContainer.classList.contains("expanded")) {
        chatboxContainer.classList.remove("expanded");
        chatboxToggle.textContent = "+";
        chatboxBody.style.maxHeight = "0"; // Contraer el chatbox estableciendo la altura máxima en 0
        chatboxBody.style.paddingTop = "0"; // Eliminar el espacio superior
        chatboxBody.style.paddingBottom = "0"; // Eliminar el espacio inferior
    } else {
        chatboxContainer.classList.add("expanded");
        chatboxToggle.textContent = "-";
        chatboxBody.style.maxHeight = "300px"; // Aumentar la altura máxima para expandir el chatbox
        chatboxBody.style.paddingTop = "10px"; // Agregar espacio superior
        chatboxBody.style.paddingBottom = "10px"; // Agregar espacio inferior
    }
}
