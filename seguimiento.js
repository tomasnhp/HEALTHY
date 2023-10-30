document.addEventListener("DOMContentLoaded", function () {
    const seguimientoLista = document.getElementById("seguimiento-lista");

    // Recupera los datos de seguimiento almacenados en el almacenamiento local
    const datosSeguimiento = JSON.parse(localStorage.getItem("datosSeguimiento")) || [];

    // Función para mostrar los datos de seguimiento
    function mostrarSeguimiento() {
        seguimientoLista.innerHTML = "";

        if (datosSeguimiento.length === 0) {
            seguimientoLista.innerHTML = "<p>No hay datos de seguimiento disponibles.</p>";
        } else {
            datosSeguimiento.forEach((dato) => {
                const fecha = dato.fecha;
                const puntaje = dato.puntaje;

                const seguimientoItem = document.createElement("div");
                seguimientoItem.classList.add("seguimiento-item");
                seguimientoItem.innerHTML = `<p>Fecha: ${fecha}</p><p>Puntaje: ${puntaje}</p>`;

                seguimientoLista.appendChild(seguimientoItem);
            });
        }
    }

    // Llama a la función para mostrar los datos de seguimiento
    mostrarSeguimiento();

    // Obtén el contexto del canvas y crea un gráfico
    const ctx = document.getElementById('grafico-seguimiento-personalizado').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line', // Tipo de gráfico (línea)
        data: {
            labels: fechasProgreso, // Utiliza las fechas de Progreso Personal
            datasets: [
                {
                    label: 'Puntaje de Salud Emocional', // Etiqueta del conjunto de datos
                    data: puntajesProgreso, // Utiliza los puntajes de Progreso Personal
                    fill: false, // Sin relleno en la línea
                    borderColor: 'rgba(62, 151, 255, 1)', // Color del borde
                    borderWidth: 2 // Ancho del borde
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10
                }
            }
        }
    });
});
