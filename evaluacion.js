document.addEventListener("DOMContentLoaded", function () {
    const evaluacionForm = document.getElementById("evaluacion-form");
    const resultados = document.getElementById("resultados");
    const nivelSalud = document.getElementById("nivel-salud");
    const recomendaciones = document.getElementById("recomendaciones");

    // Agrega más preguntas según sea necesario
    const preguntas = [
        "pregunta1",
        "pregunta2",
        "pregunta3",
        "pregunta4",
        "pregunta5"
    ];

    evaluacionForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Obtiene las respuestas del formulario
        const respuestas = preguntas.map((pregunta) =>
            parseInt(document.getElementById(pregunta).value)
        );

        // Invierte los valores para que los altos sean menos saludables
        const respuestasInvertidas = respuestas.map((respuesta) => 10 - respuesta);

        // Calcula el promedio de las respuestas invertidas
        const promedio = respuestasInvertidas.reduce((a, b) => a + b) / respuestasInvertidas.length;

        // Calcula el nivel de salud mental, 10 - promedio
        const nivelSaludMental = 10 - promedio;

        // Actualiza el nivel de salud mental y la barra de salud
        nivelSalud.style.width = `${nivelSaludMental * 10}%`;
        nivelSalud.textContent = nivelSaludMental.toFixed(1);

        // Muestra los resultados
        resultados.style.display = "block";

        // Muestra mensajes basados en el nivel de salud mental
        if (nivelSaludMental >= 8) {
            recomendaciones.innerHTML = "¡Tu salud mental está en un excelente estado! Sigue cuidándote y mantén un estilo de vida saludable.";
        } else if (nivelSaludMental >= 5) {
            recomendaciones.innerHTML = "Tu salud mental es aceptable, pero puedes hacer más. Intenta mantener un equilibrio entre trabajo, descanso y ejercicio.";
        } else {
            recomendaciones.innerHTML = "Tu salud mental necesita atención. Te recomendamos buscar apoyo de amigos, familiares o un profesional de la salud mental.";
        }
    });
});
