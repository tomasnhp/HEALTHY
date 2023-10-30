document.addEventListener("DOMContentLoaded", function () {
    const saludForm = document.getElementById("salud-form");
    const progresoLista = document.getElementById("progreso-lista");
    const graficoProgreso = document.getElementById("grafico-progreso");
    const datosProgreso = JSON.parse(localStorage.getItem("datosProgreso")) || [];

    saludForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtenemos los valores de fecha y puntaje
        const fecha = saludForm.elements["fecha"].value;
        const puntaje = saludForm.elements["puntaje"].value;

        // Validamos los valores
        if (fecha.trim() === "" || puntaje.trim() === "") {
            alert("Por favor, completa ambos campos.");
            return;
        }

        // Creamos un elemento li para mostrar la información
        const li = document.createElement("li");
        li.textContent = `Fecha: ${fecha}, Puntaje: ${puntaje}`;
        progresoLista.appendChild(li);

        // Almacenamos los datos en un objeto y lo guardamos en localStorage
        const nuevoDato = { fecha, puntaje };
        datosProgreso.push(nuevoDato);
        localStorage.setItem("datosProgreso", JSON.stringify(datosProgreso));

        // Limpiamos el formulario
        saludForm.reset();

        // Actualizamos el gráfico de progreso
        mostrarProgreso();
    });

    function mostrarProgreso() {
        graficoProgreso.innerHTML = ""; // Limpiar el contenido anterior

        // Creamos un objeto para calcular el promedio de puntajes por día
        const promedioPuntajesPorDia = {};

        datosProgreso.forEach((dato) => {
            if (!promedioPuntajesPorDia[dato.fecha]) {
                promedioPuntajesPorDia[dato.fecha] = { total: 0, count: 0 };
            }

            promedioPuntajesPorDia[dato.fecha].total += parseFloat(dato.puntaje);
            promedioPuntajesPorDia[dato.fecha].count += 1;
        });

        for (const fecha in promedioPuntajesPorDia) {
            if (promedioPuntajesPorDia.hasOwnProperty(fecha)) {
                const promedio = promedioPuntajesPorDia[fecha].total / promedioPuntajesPorDia[fecha].count;
                const barra = document.createElement("div");
                barra.classList.add("barra-progreso");
                barra.style.width = promedio * 10 + "%";
                barra.textContent = fecha + " - Promedio: " + promedio.toFixed(2);
                graficoProgreso.appendChild(barra);
            }
        }
    }

    // Llamamos a la función para mostrar el gráfico de progreso al cargar la página.
    mostrarProgreso();
});
document.addEventListener("DOMContentLoaded", function () {
    const graficoProgreso = document.getElementById("grafico-progreso");

    // Datos de ejemplo (puedes reemplazarlos con tus datos reales)
    const datosProgreso = [
        { fecha: "2023-01-01", puntaje: 8 },
        { fecha: "2023-01-02", puntaje: 7 },
        { fecha: "2023-01-03", puntaje: 9 },
        // ... Agrega más datos aquí ...
    ];

    // Función para crear y agregar una barra al gráfico
    function agregarBarra(fecha, puntaje) {
        const barra = document.createElement("div");
        barra.classList.add("barra-progreso");
        barra.textContent = `${fecha} - Puntaje: ${puntaje}`;
        graficoProgreso.appendChild(barra);
    }

    // Agrega las barras utilizando los datos de ejemplo
    datosProgreso.forEach((dato) => {
        agregarBarra(dato.fecha, dato.puntaje);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const graficoProgreso = document.getElementById("grafico-progreso");

    // Datos de ejemplo (puedes reemplazarlos con tus datos reales)
    const datosProgreso = [
        { fecha: "2023-01-01", puntaje: 8 },
        { fecha: "2023-01-02", puntaje: 7 },
        { fecha: "2023-01-03", puntaje: 9 },
        // ... Agrega más datos aquí ...
    ];

    // Función para crear y agregar una barra al gráfico
    function agregarBarra(fecha, puntaje) {
        const barra = document.createElement("div");
        barra.classList.add("barra-progreso");
        barra.textContent = `${fecha} - Puntaje: ${puntaje}`;
        // Insertar barras al principio del gráfico para que se muestren de derecha a izquierda
        graficoProgreso.insertBefore(barra, graficoProgreso.firstChild);
    }

    // Agrega las barras utilizando los datos de ejemplo
    datosProgreso.forEach((dato) => {
        agregarBarra(dato.fecha, dato.puntaje);
    });
});
